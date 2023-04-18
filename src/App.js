import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import imagenes from "./imgenes"
console.log(imagenes)
class App extends Component {
    render() {
        return (
            <>  
                <Router>
                    <NavBar />
                    <Routes>
                        <Route index path="/" element={<Home title="Bienvenido Usuario al mundo Retro Hardware!" img={imagenes["pic1"]}/>} />
                        <Route path="/shop" element={<ItemListContainer/>} />
                    </Routes>
                </Router>
            </>
        )
    }
}

export default App;