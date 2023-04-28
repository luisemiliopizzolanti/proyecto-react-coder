import React, {useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import { Typography } from '@mui/material';
import ItemCard from '../ItemCard/ItemCard';
import "./ItemListContainer.css"

import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../firebase/FireBase";

const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    useEffect(() => {
        const getItems = async () => {
            const q = query(collection(db, "products"));
            const docs = [];
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
              docs.push({ ...doc.data(), id: doc.id });
            });
            //Ordeno por fecha de lanzamiento de los productos
            docs.sort(
                (product1, product2)=>
                    (product1.release_year > product2.release_year) ? 1 : (product1.release_year < product2.release_year) ? -1 : 0
                )
          // console.log(docs)
            setItems(docs);
          };
          
          getItems();
          //console.log(items)
          
      },[]);

    return (
        <>
            <Typography key="title" variant="h4" gutterBottom>
                Tienda: 
            </Typography>
            <div className='ItemList' key="products">
                {items.map((item)=>{
                    return(
                    <div key={item.id}>
                      <Link
                        to={`/itemDescription/${item.id}`}
                        style={{ textDecoration: "none" }}
                        key={item.id}
                        >
                            <ItemCard img={item.img1} name={item.title} price={item.price}/>
                        </Link>
                    </div>
                )
            })}
            </div>
        </>
  )
}

export default ItemListContainer;