import React from 'react'
import '../src/Styles/App.css';
import { Route, Routes } from "react-router-dom"
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Projects from './Pages/Projects'
import Learn from './Pages/Learn'
import Merch from './Pages/Merch'
import ContactUs from './Pages/ContactUs'


function App() {
  return ( 
    <>
      <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/AboutUs" element={ <AboutUs /> } />
      <Route path="/Projects" element={ <Projects /> } />
      <Route path="/Learn" element={ <Learn /> } />
      <Route path="/Merch" element={ <Merch /> } />
      <Route path="/ContactUs" element={ <ContactUs /> } />
      </Routes>
    </>
  );
}

export default App;
