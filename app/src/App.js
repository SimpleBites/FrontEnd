import * as React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Recipes from "./components/pages/Recipes"

import Contact from "./components/pages/Contact";
import Footer from './components/Footer';
import Navbar from "./components/navbar";
import Login from "./components/pages/Login";
import Register from "./components/pages/register";

import "../src/AppTw.css";
<<<<<<< Updated upstream
=======
import Favorites from "./components/pages/favorites";
import Submit from "./components/pages/submit"
import Submitted from "./components/pages/submitted";
>>>>>>> Stashed changes



// import '../tailwind.config'

function App() {
  return (
    <div className="App">
      <Navbar />
     <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Register" element={<Register />} /> 
<<<<<<< Updated upstream
=======
        <Route path="/Profile" element={<Profile />} /> 
        <Route path="/Favorites" element={<Favorites />} /> 
        <Route path="/Submit" element={<Submit />} /> 
        <Route path="/Submitted" element={<Submitted />} /> 
>>>>>>> Stashed changes
      </Routes>
      <Footer /> 
    </div>
  );
}

export default App;
