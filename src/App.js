import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import imagenes from "./imgenes"
import ItemDescription from "./components/ItemDesctiption/ItemDescription";
import CartList from "./components/CartList/CartList";
import { ItemsInCartProvider } from "./context/CartContext";
import UserDataForm from "./components/UserDataForm/UserDataForm"


class App extends Component {
    render() {
        return (  
            <ItemsInCartProvider>
                
                <Router>
                    <NavBar />
                    <Routes>
                        <Route index path="/" element={<Home title="Bienvenido Usuario al mundo Retro Hardware!" img={imagenes["pic1"]}/>} />
                        <Route path="/shop" element={<ItemListContainer/>} />
                        <Route path="/itemDescription/:id" element={<ItemDescription/>} />
                        <Route path="/CartList" element={<CartList/>} />
                    </Routes>
                </Router>
            </ItemsInCartProvider>
           

        )
    }
}

export default App;