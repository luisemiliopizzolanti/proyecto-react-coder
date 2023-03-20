import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css"

class App extends Component {
    render() {
        return (
            <>
                <NavBar />
                <ItemListContainer title="Bienvenido Usuario al mundo Retro Hardware!"/>
            </>
        )
    }
}

export default App;