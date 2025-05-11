import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css'
import Home from './components/Home.jsx';
import Navbar from './components/Nav.jsx';
import Contact from './components/Contact.jsx';
import Syllabus from './components/Syllabus.jsx'; 

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/syllabus" element={<Syllabus/>} />
    </Routes>
    </BrowserRouter>
  )
};

export default App
