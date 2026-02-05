import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books" element={<div className="container" style={{ padding: '100px 0' }}><h1>Our Books</h1></div>} />
        <Route path="/contact" element={<div className="container" style={{ padding: '100px 0' }}><h1>Contact Us</h1></div>} />
        <Route path="/orders" element={<div className="container" style={{ padding: '100px 0' }}><h1>My Orders</h1></div>} />
      </Routes>
    </div>
  );
}

export default App;
