import React, { useContext } from 'react'
import {useNavigate} from 'react-router-dom';
import { Grid,Typography,Button } from '@mui/material'
import { CartContext } from "../../context/CartContext";


export default function CartItem({product,index}) {
  const navigate = useNavigate();
  const {removeItemCart} = useContext(CartContext)
  const pepe = (a) =>{
    return () =>{
      removeItemCart(a)
      navigate('/CartList');
    }
  }
  return (
    <>
       <Grid container direction="row" sx={{marginTop:"10px"}}>
            <img src={product.img1} style={{Height:"80px", width:"80px", marginRight:"20px"}} alt="prueba"></img>
            <Typography variant='subtitle1'>Producto: {product.title} </Typography>
            <Typography variant='subtitle1' style={{marginLeft: 'auto'}} >Precio: {product.price} </Typography>
            <Button variant='contained' onClick={pepe(index)} colors='primary' style={{marginLeft: 'auto'}}>Eliminar</Button>
        </Grid>
    </>
  )
}
