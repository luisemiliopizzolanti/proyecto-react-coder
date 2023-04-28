import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="Navigation" >
            <ul className="List-ul" >
                <li>
                    <h1 style={{ color: "white" }} > Retro Hardware </h1> 
                </li> 
                <Link to="/">    
                   Inicio 
                </Link> 
                <Link to="/shop">            
                    Tienda 
                </Link> 
                <Link to="/CartList">            
                    <CartWidget/>
                </Link> 
            </ul> 
        </nav>
    );
};

export default NavBar;