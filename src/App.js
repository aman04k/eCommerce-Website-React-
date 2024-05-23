
import React from "react";
import './App.css';
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Footer from "./components/inc/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

