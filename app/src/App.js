import * as React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Recipes from "./components/pages/Recipes";
import Profile from "./components/pages/Profile";
import Contact from "./components/pages/Contact";
import Footer from './components/Footer';
import Navbar from "./components/navbar";
import Login from "./components/pages/Login";
import Register from "./components/pages/register";
import Favorites from "./components/pages/favorites";
import Submit from "./components/pages/submit";
import Submitted from "./components/pages/submitted";
import Recipe from "./components/pages/recipe";
import Arecipes from "./components/pages/admin/arecipes"

import "../src/AppTw.css";
import AdminNav from "./components/adminNav";
import Comments from "./components/pages/admin/comments";
import Panel from "./components/pages/admin/panel";
import Aupload from "./components/pages/admin/aupload";
import Aaprove from "./components/pages/admin/aapprove";
import Rejected from "./components/pages/admin/rejected";

function App() {
  const location = useLocation();
  console.log("Current location:", location.pathname); 

  const showNavbarAndFooterRoutes = [
    "/Home",
    "/About",
    "/Recipes",
    "/Contact",
    "/Login",
    "/Register",
    "/profile",
    "/favorites",
    "/submit",
    "/Submitted",
    "/Recipe",
    "/Admin/Comments"
  ];

  const showNavbarAndFooter = showNavbarAndFooterRoutes.includes(location.pathname);

  return (
    <div className="App">
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Submit" element={<Submit />} />
        <Route path="/Submitted" element={<Submitted />} />
        <Route path="/Recipe" element={<Recipe />} />
        <Route path="/Admin/*" element={<AdminWithLayout />} /> 
        <Route path="/Admin/Comments" element={<Comments />} /> 
        <Route path="/admin/Panel" element={<Panel />} /> 
        <Route path="/admin/arecipes" element={<Arecipes />} /> 
        <Route path="/admin/aupload" element={<Aupload />} /> 
        <Route path="/admin/aApprove" element={<Aaprove />} /> 
        <Route path="/admin/Rejected" element={<Rejected />} /> 
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </div>
  );
}

function AdminWithLayout() {
  return (
    <>
      <AdminNav />
    </>
  );
}

export default App;
