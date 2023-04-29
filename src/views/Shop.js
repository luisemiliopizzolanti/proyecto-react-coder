import React from 'react'
import { Typography } from '@mui/material';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import {useParams } from "react-router-dom";

const Shop = () => {
    const { category } = useParams(); 
  return (
    <>    
        <Typography key="title" variant="h4" gutterBottom>
            {category !== "all" ? `Tienda - Consolas de ${category}` : "Todas las consolas"}
        </Typography>
        <ItemListContainer category={category}/>
    </>
    )
  }

  export  default Shop;