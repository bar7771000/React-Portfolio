import React from 'react';
import './App.css';
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import {Route, Link, Router, Routes, useLocation} from "react-router-dom"
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation();

  return (
    //Initial order of the components on a page
    <div className='App'>
      <Navbar/>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route exact path="/about" element={<About/>}></Route>
          <Route exact path="/contact" element={<Contact/>}></Route>
          <Route exact path="/projects" element={<Projects/>}></Route>
          <Route exact path="/skills" element={<Skills/>}></Route>
          <Route exact path="/testimonials" element={<Testimonials/>}></Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
