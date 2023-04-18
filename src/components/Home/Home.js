import React from "react";
import "./Home.css";


const Home = ({title,img}) => {
  return (

    <div className="ItemListContainer">
      <h1>{title}</h1>
      <img src={img} alt="logo" />
    </div>
  );
};

export default Home;
