 
import React from "react";
 
const Cards = (props) => {
    return (
      <div className="card">
        <img src={props.imageUrl} />
        <span className="legend"> {props.name} </span>
      </div>
    );
  };
  

export default Cards;