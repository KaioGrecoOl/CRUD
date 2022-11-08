import React from "react";
import "./cards.css";

export default function Card(props) {

  return (
      <div className="card-container" >
        {/* <h1 className="card-title">Card</h1> */}
        <p className="card-title">{props.name}</p>
        <p className="card-price">{props.price}</p>
        <p className="card-category">{props.category}</p>
      </div>
  );
}