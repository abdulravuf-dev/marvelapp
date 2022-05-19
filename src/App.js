 
 import { BrowserRouter, Routes, Route } from "react-router-dom";

import Links from './Components/Links';

// import Header from './Components/Header';
import Marvel from './Components/Marvel';
import Character from "./Components/Character";
import Comics from "./Components/Comics";

function App() {
  return (
    <div className="App">
 
 
 
 <BrowserRouter>

 <Links />
      <Routes> 
        
      <Route path="/marvel" element={<Marvel/>} />
      <Route path="/character" element={<Character/>} />
      
      <Route path="/comics" element={<Comics/>} />
      </Routes>
    </BrowserRouter>  
 
 
 
 
 
    </div>
  );
}

export default App;
