import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Shop from "./views/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import imagenes from "./imgenes"
import ItemDescription from "./components/ItemDesctiption/ItemDescription";
import CartList from "./components/CartList/CartList";
import { ItemsInCartProvider } from "./context/CartContext";


class App extends Component {
    render() {
        return (  
            <ItemsInCartProvider>
                
                <Router>
                    <NavBar title="Retro Consolas" />
                    <Routes>
                        <Route index path="/" element={<Home title="Bienvenido al mundo de Retro Consolas!" img={imagenes["pic1"]}/>} />
                        <Route path="/shop/:category" element={<Shop/>} />
                        <Route path="/itemDescription/:id" element={<ItemDescription/>} />
                        <Route path="/CartList" element={<CartList/>} />
                    </Routes>
                </Router>
            </ItemsInCartProvider>
           

        )
    }
}

export default App;