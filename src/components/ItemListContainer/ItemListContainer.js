import React, {useEffect,useState} from 'react'
import { Typography } from '@mui/material';
import axios from "axios";
import ItemCard from '../ItemCard/ItemCard';
import "./ItemListContainer.css"

const ItemListContainer = () => {
    const [items,setItems] = useState([]);
    useEffect(() => {
        axios("https://raw.githubusercontent.com/luisemiliopizzolanti/json_test/main/json_simulador_api").then((res) =>
        setItems(res.data)
        );
      });
    return (
        <>
        <Typography variant="h4" gutterBottom>
            Tienda: 
        </Typography>
        <div className='ItemList'>
            
            {items.map((item)=>{
                
                return(
                <div key={item.ID}>
                    <ItemCard img={item.img} name={item.name} price={item.price}/>
                </div>
            )
                })}
        </div>
        </>
  )
}

export default ItemListContainer;