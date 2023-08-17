import React from 'react';
import NavBar from './components/NavBar';  // Corrected import
import Favorites from './components/Favorites';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Products from './components/Products';
import Home from './components/Home';


function App() {
  return (
    <div className='container'>
      {/* <NavBar />   */}
     
      {/* <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes> */}
      <Products />
    </div>
  );
}

export default App;
