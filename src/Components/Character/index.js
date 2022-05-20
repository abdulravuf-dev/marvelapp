
import React from "react";
import Cards from "../Cards";

import './style.css'

const Character = (props) => {
  return (
    <div className="CharactersContainer">
      {props.data.map((character) => {
        return <Cards name={character.name} imageUrl={character.thumbnail.path +
          "." + character.thumbnail.extension}


          // imageUrl2={character.url}

        //  imageUrl2={   character.items.thumbnail.path +
        //       "." +    character.items.thumbnail.extension } 


        />;




      })}
    </div>
  );







  // src={item.thumbnail.path + "." + item.thumbnail.extension}


};
export default Character;

// "http://i.annihil.us/u/prod/marvel/i/mg/9/50/57ed5bc9040e3.jpg" 