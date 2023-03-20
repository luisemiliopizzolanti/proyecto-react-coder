import React from "react";
import "./NavBar.css";

import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return ( <
        nav className = "Navigation" >
        <
        ul className = "List-ul" >
        <
        li >
        <
        h1 style = {
            { color: "white" }
        } > Retro Hardware < /h1> < /
        li > <
        li >
        <
        a href = "/" > Inicio < /a> < /
        li > <
        li >
        <
        a href = "/" > Tienda < /a> < /
        li > <
        li >
        <
        a href = "/" > Contacto < /a> < /
        li > <
        li >
        <
        CartWidget / >
        <
        /li> < /
        ul > <
        /nav>
    );
};

export default NavBar;