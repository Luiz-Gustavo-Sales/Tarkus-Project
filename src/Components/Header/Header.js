import React from 'react';

import logo from '../../assets/Logo-Tarkus.png';
import './Header.css';

import About from '../About/About';
import Contact from '../Contact/Contact';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
//import {ReactComponent as Home}

function Header() {
    return (
        <Router>
            <nav>
                <div className="div-header">
                    <div className="div-logo">
                        {/* INSERINDO A LOGO */}
                        <img src={logo} alt="Logo" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <NavLink to="/about" className="nav-Link" ><About className="div-logo" /></NavLink>
                        <NavLink to="/contact" className="nav-Link" ><Contact className="div-logo" /></NavLink>
                        {/* <button></button> */}
                    </div>
                </div>
            </nav >

        </Router>

    );
}

export default Header;


/*

*/


