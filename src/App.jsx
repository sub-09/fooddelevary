import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/Place-Order/PlaceOrder';
import Footer from './components/footer/footer';
import LoginPopup from './components/LoginPopUp/LoginPopup';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
