import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar1 from './components/Navbar/Navbar1'
import  Store from './pages/Store'
import  Accessories from './pages/Accessories'
import Ipad from './pages/Ipad'
import Iphone from './pages/Iphone'
import Macbook from './pages/Macbook'
import ImageSlider from './components/Navbar/ImageSlider';

function App() {
  return (
    <div className="App">
 <Router>
      <Navbar1 />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/iphone' element={<Iphone/>} />
        <Route path='/ipad' element={<Ipad/>} />
        <Route path='/Macbook' element={<Macbook/>} />
        <Route path='/Accessories' element={<Accessories/>} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
