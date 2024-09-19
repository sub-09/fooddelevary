import React, { useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin }) => {
    const [menu, setMenu] = useState('Menu');

    return (
        <div className='nav'>
            <Link to="/">
                <img src={assets.logo} alt='logo' className='logo' />
            </Link>

            <ul className='nav-menu'>
                <li>
                    <Link to='/' onClick={() => setMenu('Home')} className={menu === 'Home' ? 'active' : ''}>Home</Link>
                </li>
                <li>
                    <a href='#exploreMenu' onClick={() => setMenu('Menu')} className={menu === 'Menu' ? 'active' : ''}>Menu</a>
                </li>
                <li>
                    <a href='#appDownload' onClick={() => setMenu('Mobile App')} className={menu === 'Mobile App' ? 'active' : ''}>Mobile App</a>
                </li>
                <li>
                    <a href='#footer' onClick={() => setMenu('Contact us')} className={menu === 'Contact us' ? 'active' : ''}>Contact us</a>
                </li>
            </ul>

            <div className='nav-right'>
                <img src={assets.search_icon} alt='search-icon' />
                <div className='nav-search-icon'>
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt='basket-icon' />
                    </Link>
                    <div className='dot'></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign in</button>
            </div>
        </div>
    );
};

export default Navbar;
