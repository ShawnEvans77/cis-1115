import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css'
import Home from './components/Home.jsx';
import Navbar from './components/Nav.jsx';
import Contact from './components/Contact.jsx';
import Syllabus from './components/Syllabus.jsx'; 
import Tests from './components/Tests.jsx'; 

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/syllabus" element={<Syllabus/>} />
      <Route path="/tests" element={<Tests/>} />
    </Routes>
    </BrowserRouter>
  )
};

export default App
