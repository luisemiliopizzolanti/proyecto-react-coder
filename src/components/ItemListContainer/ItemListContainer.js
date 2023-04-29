import React, {useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import ItemCard from '../ItemCard/ItemCard';
import "./ItemListContainer.css"

import { collection, query, getDocs,where } from "firebase/firestore";
import { db } from "../../firebase/FireBase";

const ItemListContainer = ({category}) => {
    const [items,setItems] = useState([]);
  

    useEffect(() => {
        const getItems = async () => {
            let productsCategoryQuery;
            if(category==="all"){
                productsCategoryQuery= query(collection(db, "products"))
            }else if(category==="featured_product"){
                productsCategoryQuery= query(collection(db, "products"),where("featured_product", "==", true))
            }else{
                productsCategoryQuery= query(collection(db, "products"),where("category", "==", category))
            }
            const docs = [];
            const querySnapshot = await getDocs(productsCategoryQuery);
            console.log(querySnapshot)
            querySnapshot.forEach((doc) => {
              docs.push({ ...doc.data(), id: doc.id });
            });
            //Ordeno por fecha de lanzamiento de los productos
            docs.sort(
                (product1, product2)=>
                    (product1.release_year > product2.release_year) ? 1 : (product1.release_year < product2.release_year) ? -1 : 0
                )
            setItems(docs);
          };
          getItems();
          
      },[category]);

    return (
        <>  
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