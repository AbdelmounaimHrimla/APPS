import React, { Component } from 'react';
import './css/NavBar.css';
import {NavLink} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="navBar">
                <nav className="navBar-header">
                    <ul>
                        <li><NavLink to="/" className="">Home</NavLink></li>
                        <li><NavLink to="/posts" className="">Posts</NavLink></li>
                        <li><NavLink to="/new-post" className="">New Post</NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;