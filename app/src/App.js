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
import Panel from "./components/pages/admin/panel";
import Dashboard from "./components/pages/admin/dashboard";
import Adduser from "./components/pages/admin/adduser";
import Rejected from "./components/pages/admin/rejected";
import Aapprove from "./components/pages/admin/aapprove";
import Asubmitted from "./components/pages/admin/Asubmitted";
import Aupload from "./components/pages/admin/aupload";
import Comments from "./components/pages/comments";

function App() {
  const location = useLocation();
  console.log("Current location:", location.pathname); 

  const showNavbarAndFooterRoutes = [
    "/",
    "/about",
    "/recipes",
    "/contact",
    "/login",
    "/register",
    "/profile",
    "/favorites",
    "/submit",
    "/submitted",
    "/recipe",
    "/admin/dashboard",
    "/admin/adduser",
    "/comments"
  ];

  const showNavbarAndFooter = showNavbarAndFooterRoutes.includes(location.pathname.toLowerCase());

  return (
    <div className="App">
      {showNavbarAndFooter && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/submitted" element={<Submitted />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/admin/*" element={<AdminWithLayout />} /> 
        <Route path="/admin/comments" element={<Comments />} /> 
        <Route path="/admin/panel" element={<Panel />} /> 
        <Route path="/admin/arecipes" element={<Arecipes />} /> 
        <Route path="/admin/dashboard" element={<Dashboard />} /> 
        <Route path="/admin/adduser" element={<Adduser />} /> 
        <Route path="/admin/rejected" element={<Rejected />} /> 
        <Route path="/admin/aapprove" element={<Aapprove />} /> 
        <Route path="/admin/asubmitted" element={<Asubmitted />} /> 
        <Route path="/admin/aupload" element={<Aupload />} /> 
        <Route path="/comments" element={<Comments />} /> 
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
