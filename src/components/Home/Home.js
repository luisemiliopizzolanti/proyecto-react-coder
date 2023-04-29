import React from "react";
import "./Home.css";
import ItemListContainer from '../ItemListContainer/ItemListContainer';


const Home = ({title}) => {
  return (

    
    <div className="ItemListContainer">
      <h1>{title}</h1>
      <h2>Algunas destacadas!</h2>
      <div className="featured_product">
        <ItemListContainer category="featured_product"/>
      </div>
    </div>
  );
};

export default Home;
