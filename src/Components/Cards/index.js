 
import React from "react";
 
import './style.css'
import { useState } from "react";
 
  
  const Cards = (props) => {
 
 const [show,setShow]=useState(false)
    return (
      <>
      <div className="card" onClick={()=>{
        setShow(true)
      }}>

        <img src={props.imageUrl} />
        
        <span className="legend"> {props.name} </span>
      </div>


{show === true ? ( 
      <div className="displayData" onClick={()=>{
        setShow(false)
      }}  >
       
      <img src={props.imageUrl}/>
     <img src={props.imageUrl2}/> 
      
       <span > {props.imageUrl2} </span>  

      <h1>hello</h1>
      
      </div>) :null}
      </>
    );
  };
  
  



export default Cards;











//  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
























 