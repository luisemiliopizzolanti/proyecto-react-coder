
import React, { useState,useEffect,useContext } from 'react';
import { Divider, Grid, Typography, Button,Box,TextField } from '@mui/material';
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
// FIRBASE - FIRESTORE
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/FireBase";



export default function ItemDescription() {
  const [productData, setProduct] = useState([])
  const [selectedImage,setSelectedImage] = useState(0)
  const [count,setCount] = useState(1)
  const [imags,setImages] = useState([])
  const {cartCount,setCartCount,addItemCart,itemsInCart} = useContext(CartContext)
  let { id } = useParams();

  const onContChange = (e) => {
    let count = e.target.value;
    count = count <= 0 ? 1 : count;
    e.target.value=count
    setCount(Number(count));
  };

  const addToCart = () =>{

    setCartCount(cartCount+count)
    for(let i=1; i<=count;i++){
      addItemCart(productData)
    }
    console.log(itemsInCart)
    
  }
  useEffect(() => {
      const getItems = async () => {
      const q = query(collection(db, "products"), where(documentId(), "==", id));
      const docs = [];
      const imgs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      if(docs[0].img1.length>0 && !imgs.includes(docs[0].img1)){ imgs.push(docs[0].img1)}
      if(docs[0].img2.length>0 && !imgs.includes(docs[0].img2)){ imgs.push(docs[0].img2)}
      if(docs[0].img3.length>0 && !imgs.includes(docs[0].img3)){ imgs.push(docs[0].img3)}

      setImages(imgs)
      setProduct(docs[0]);
    };
    getItems();
  }, [id]);
  
  
  return (
    <div>
        <Grid container spacing={1}  style={{ maxWidth:1100,margin: "0 auto"}}>
            <Grid item sm={1}>
             { /*  <ImageGrid images={imags} onSelect={setSelectedImage} selectedImage={selectedImage}/>*/}
             <Grid container direction="column">
                {imags.map( function(image,index) { 
                  return  <img src={image} alt="product" key={index} onClick={() => setSelectedImage(index)} style={{border: index ===selectedImage ? "solid 1px black ": "solid 1px grey",width:"100%",height:80, cursor:"pointer"}}/>
                })
              }
            </Grid>
            </Grid>
            <Grid item sm={5}>
              <Grid container direction="column">
                <img src={imags[selectedImage]} alt="main_image" style={{width: "100%",maxHeight:450, border: "solid 1px"}}/>
              </Grid>
                {/*<MainImage image={imags[selectedImage]}/>*/}
            </Grid>
            <Grid item sm={6}>
                {/*<Info {...product}/>*/}
                <Grid container direction="column" style={{height:'100%'}}>
                    <Typography variant='subtitle1'>{productData.category}</Typography>
                    <Divider />
                    <Box mt={2}>
                      <Typography variant='h4'>{productData.title}</Typography>
                      <Typography variant='subtitle1'>{productData.description}</Typography>
                      <Typography variant='h5'>${productData.price}</Typography>
                      <TextField
                        id="Cantidad"
                        label="Cantidad"
                        type="number"
                        defaultValue={count}
                        onChange={onContChange}
                        InputLabelProps={{
                          shrink: true,
                          min: 1
                        }}
                      />
                    </Box>
                    <Button variant='contained' onClick={addToCart} colors='primary' style={{marginTop: 'auto'}}>
                      Comprar
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </div>
  )
}
