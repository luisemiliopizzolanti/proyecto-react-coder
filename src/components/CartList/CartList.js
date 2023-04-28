import { Button, Divider, Grid,Typography } from '@mui/material'
import React, {useContext, useState} from 'react'
import CartItem from '../CartItem/CartItem'
import { CartContext } from "../../context/CartContext";
import UserDataForm from "../UserDataForm/UserDataForm"
import { collection,addDoc} from "firebase/firestore";
import { db } from "../../firebase/FireBase";

const CartList = () => {
  const {itemsInCart} = useContext(CartContext)
  
  const [nombre, setNombreUsuario] = useState('');
  const [apellido, setApellidoUsuario] = useState('');
  const [telefono, setTelefonoUsuario] = useState('');
  const [direccion, setDireccionUsuario] = useState('');
  const [email, setEmailUsuario] = useState('');
  const [purchaseID,setPurchaseID] = useState("")

  let total = 0
  const sumPrice = (price) =>{
    total=Number(total)+Number(price)
  }

  const addPurchase = () =>{
    let cartData = [...itemsInCart];
    let userData = {nombre,apellido,telefono,direccion,email}
   cartData.push(userData)
    //console.log(cartData)
    const send = async () => {
      // Add a new document with a generated id.
      const docRef = await addDoc(collection(db, "purchases"), {
        cartData,
      });
      // console.log("Document written with ID: ", docRef.id);
      setPurchaseID(docRef.id)
  }
  send();
}
  return (
    <>
    
    <Grid container direction="column" sm={8}   style={{ margin: "0 auto"}}>
      <Grid item container direction="column" sm={8}  style={{margin: "0 auto"}}>
        <Grid item sm={12}>
          <h1>Elementos de carrito:</h1>
        </Grid>
        <Grid item sm={12}>
            {itemsInCart.map((item,index)=>{
              return(
                <>
                  <CartItem key={index} product={item} index={index}></CartItem>
                  {sumPrice(item.price)}
                  <Divider></Divider>
                </>
              )
              })}
          
          </Grid>
        </Grid>
        <Grid container direction="row"  sm={9} style={{marginTop: 10}} >
          <b style={{marginRight:"5"}}>Total : {total}</b>
          {email==="" ? (
            <>
                <Button variant='contained' disabled  colors='primary' style={{marginTop: '10', marginLeft:"50" }}>Finalizar Compra</Button>
                <Typography variant='h6'>Debe completar los datos primero para finalizar la compra.</Typography>
            </>
            ):
          (
            <>
                <Button variant='contained' onClick={addPurchase} colors='primary' style={{marginTop: '10', marginLeft:"50" }}>Finalizar Compra</Button>
                {purchaseID==="" ? (
                  <>
                    <Typography variant='h6'>Datos completados. Puede finalizar la compra.</Typography>
                  </>
                ):(
                  <>
                  <Typography variant='h6'>Felicidades, compra completa. Su id de compra es: {purchaseID}</Typography>
                  </>
                )
              }

            </>
          )}

          </Grid>
      <Grid item sm={12}>
        <Divider item sx={{marginTop:4}}></Divider>
        <UserDataForm 
          setNombreUsuario={setNombreUsuario} 
          setApellidoUsuario={setApellidoUsuario} 
          setTelefonoUsuario={setTelefonoUsuario}
          setDireccionUsuario={setDireccionUsuario}
          setEmailUsuario={setEmailUsuario}
        />
      </Grid>
    
    </Grid>
    </>
  )
}

export default CartList
