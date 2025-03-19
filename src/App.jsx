import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css'
import Navbar from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Info from './components/Info.jsx';
import Learn from './components/Learn.jsx';

function App() {
  return (
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/info" element={<Info/>} />
      <Route path="/learn" element={<Learn/>} />
    </Routes>
    </BrowserRouter>
    
  )
};

export default App
