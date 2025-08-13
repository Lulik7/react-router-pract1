import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="nav-container">
            <Link to="/" className="button-link">Home</Link>
            <Link to="/about" className="button-link">About</Link>
            <Link to="/services" className="button-link">Services</Link>
            <Link to="/contact" className="button-link">Contact</Link>

        </nav>
    );
};

export default Header;