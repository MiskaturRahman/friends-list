import React from 'react';
import './Header.css';
import logo from './logo';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />

            <nav>
                <a href="/pages">Pages</a>
                <a href="/Timeline">Timeline Review</a>
                <a href="/group">Manage Groups</a>
            </nav>
            <div className="searchBox">
                <input className="input" placeholder="search a friend"
                    type="search" name="" id="" />
            </div>

        </div>
    );
};

export default Header;