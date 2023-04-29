import { createContext, useState } from "react";

export const CartContext = createContext();


export const ItemsInCartProvider = ({ children,setCountCart }) => {
    //Elementos de carrito
    const [itemsInCart,setCartsItems] = useState([]);
    //Cantidad de elementos de carrito
    const [cartCount, setCartCount] = useState(0);

    const addItemCart = (item) =>{
        itemsInCart.push(item);
        setCartsItems(itemsInCart)
    }


    const removeItemCart = (index) => {
        const newItemsInCart = [...itemsInCart];
        newItemsInCart.splice(index, 1);
        console.log(newItemsInCart);
        setCartsItems(newItemsInCart);
        
        setCartCount(newItemsInCart.length);
      }
    
    const removeCart = () =>{
        setCartCount(0)
        setCartsItems([])
    }

  return (
    <CartContext.Provider value={{itemsInCart,cartCount,setCartCount,addItemCart,removeItemCart,removeCart}}>
      {children}
    </CartContext.Provider>
  );
};