import React, {useState, useEffect} from "react";
import logo from "./logo.svg";
import "./App.css";
import Services from "./pages/services/services"
import Home from "./pages/home/home"

function App() {
  return (
    <div>
      <Home />
      <Services /> 
    </div>
  );
}


export default App;
