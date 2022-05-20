 
import React from "react";
import "./style.css"
  //  import axios from "axios";
import Character from "../Character";
import axios from "axios";
import { useState, useEffect } from "react";

 
 const Marvel = () => {

    const [data, setData] = useState(null);
    const [search, setSearch] = useState("");


   

    useEffect(() => {
      const fetchData = async () => {
        const response = await axios.get(
          "https://marvelbackend.herokuapp.com/characters"
        );
        console.log("response.data", response.data.results);
  
        const modifiedData = response.data.results.splice(0, 100).filter((el) => {
          return el.name.includes(search);
        });
        setData(modifiedData);
      console.log(modifiedData)
      };
  
      fetchData();
    }, [search]);
 
    return (
 <div>
 

<div className="HeroSec" > 
 
<input
        type="text"
        value={search}
        placeholder= "Enter Your Character "
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
</div>
 {data !== null ? <Character data={data} /> : null}  
 
<div>  

 
{/* "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860" */}
{/* {data !== null ? <Character data={data} /> : null} */}

{/* {data.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/a/f0/5202887448860" ? null  : <Character data={data}/>} */}

</div>
 </div>


);
};
export default Marvel;