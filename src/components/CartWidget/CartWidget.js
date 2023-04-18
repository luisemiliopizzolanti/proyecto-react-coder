import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CartWidget = ({count}) => {
    return (
            <div style={{ display: "flex" }} >
                <AddShoppingCartIcon sx={{ color: "white" }}/> 
                <span style={{ color: "white" }}> {count} </span> 
            </div>
        );
};

export default CartWidget;