import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Routes, Route, Navigate} from "react-router-dom";
import Home from "./Home";
import "./App.css"
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";
import NavBar from "./NavBar";
import Footer from "./Footer";

const App = () => {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Services />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
