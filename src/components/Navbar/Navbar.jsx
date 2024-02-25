import React from 'react';
import './Navbar.css';
import { FaSearch } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav>
            <div> </div>
            <form className='Search-bar'>
            <FaSearch className="search-icon" />
                <input type="text" placeholder="Search..." />
             </form>
            <ul>
                <li><a href="/">Categories</a></li>
                <li><a href="/">Website Builders</a></li>
                <li><a href="/">Today's deals</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;