import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CartWidget = () => {
    return (
            <div style={
                { display: "flex" }} >
            <
            AddShoppingCartIcon sx={
                { color: "white" }}
        /> <
        span style={
                { color: "white" }} > 2 < /span> <
        /div>
            );
};

            export default CartWidget;