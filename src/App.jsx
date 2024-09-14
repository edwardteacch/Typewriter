import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Home } from "./Component/Home"
import { Create } from "./Component/Create";
import { Collect } from "./Component/Collect";
import { Send } from "./Component/Send";


function App() {
  

  return (
    <>
      
      <Home/>
      <Create/>
      <Collect/>
      <Send/>

    </>
  );
  
}

export default App;
