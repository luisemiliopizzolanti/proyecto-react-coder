import React, { useState, useContext }from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {cartCount} = useContext(CartContext)

    return (
                <div style={{ display: "flex" }} >
                    <AddShoppingCartIcon sx={{ color: "white" }}/> 
                    <span style={{ color: "white" }}> {cartCount} </span> 
                </div>
        );
};

export default CartWidget;