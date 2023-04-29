import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = ({title}) => {
    return (
        <nav className="Navigation" >
            <ul className="List-ul" >
                <li>
                    <h1 style={{ color: "white" }} > {title} </h1> 
                </li> 
                <Link to="/">    
                   Inicio 
                </Link> 
                <Link to="/shop/all">            
                    Todas
                </Link>
                <Link to="/shop/Nintendo">            
                    Nintendo
                </Link>
                <Link to="/shop/Microsoft">            
                    Microsoft
                </Link>
                <Link to="/shop/Sony">            
                    Sony 
                </Link>
                <Link to="/shop/Sega">            
                    Sega 
                </Link>
                <Link to="/CartList">            
                    <CartWidget/>
                </Link> 
            </ul> 
        </nav>
    );
};

export default NavBar;