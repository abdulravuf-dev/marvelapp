 
import React from "react";
import "./style.css"
//  import axios from "axios";
import Character from "../Character";
import axios from "axios";
import { useState, useEffect } from "react";


 
 const Marvel = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
       const response = await axios.get(
          "https://marvelbackend.herokuapp.com/characters"
      );

     
        console.log("response.data", response.data.results);
  
        const modifiedData = response.data.results.splice(0, 50);
  
        setData(modifiedData);
      };
  
  fetchData();
    }, []);
    // "http://hp-api.herokuapp.com/api/characters"
    // "https://marvelbackend.herokuapp.com/characters"
 
    return (
 <div>
 

<div className="HeroSec" > 
<p>  my new para </p>
 
</div>
 
<div>  

 {data !== null ? <Character data={data} /> : null}     
 
 
  {/* {data !== null ? <Character data={data} /> :  data.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860"? }     */}  
</div>
 </div>


);
};
export default Marvel;