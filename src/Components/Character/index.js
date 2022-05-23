
import React from "react";
import Cards from "../Cards";
 

import './style.css'

const Character = (props) => {
  return (
    <div className="CharactersContainer">
      {props.data.map((character) => {
        return <Cards name={character.name} imageUrl={character.thumbnail.path +
          "." + character.thumbnail.extension}

  
 imageUrl2={character.description}
          
 

        />;

   
      })}
          
  
 
 
    
    </div>
 

  );

 
 

};
export default Character;

 
// "http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3.jpg" 
