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
import Dashboard from "./components/admin/Dashboard";
import AdminNav from "./components/admin/adminNav";
import Favorites from "./components/pages/favorites";
import Submit from "./components/pages/submit";
import Submitted from "./components/pages/submitted";
import Recipe from "./components/pages/recipe";
import Comments from "./components/admin/Comments";

import "../src/AppTw.css";

function App() {
  const location = useLocation();

  const showNavbarAndFooterRoutes = [
    "/Home",
    "/About",
    "/Recipes",
    "/Contact",
    "/Login",
    "/Register",
    "/Profile",
    "/Favorites",
    "/Submit",
    "/Submitted",
    "/Recipe"
  ];

  // Check if the current route should show navbar and footer
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
        <Route path="/Admin" element={<AdminWithLayout />} />
      </Routes>
      {showNavbarAndFooter && <Footer />}
    </div>
  );
}

function AdminWithLayout() {
  return (
    <>
      <AdminNav />
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/Comments" element={<Comments />} />
        
      </Routes>
    </>
  );
}

export default App;
