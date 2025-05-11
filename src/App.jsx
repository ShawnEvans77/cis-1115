import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import './App.css'
import Home from './components/Home.jsx';
import Navbar from './components/Nav.jsx';


function App() {
  return (
  
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />

    </Routes>
    </BrowserRouter>
  )
};

export default App
