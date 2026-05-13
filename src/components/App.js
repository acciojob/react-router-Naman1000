
import React from "react";
import './../styles/App.css';
import Home from './Home.jsx';
import About from "./About.jsx";
import Navigation from "./Navigation.jsx"

import { Routes, Route } from "react-router-dom";  


const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
    <Navigation />
    
    <Routes >
    
    <Route path="/" element={<Home />}  />
    <Route path="/about" element={<About /> }  />

    </Routes >
    </div>
  )
}

export default App
