import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../../assets/Logo-Tarkus.png';
//import {ReactComponent as Home}

function Header() {
    return (
        <nav>

            {/*INSERINDO A LOGO*/}
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div>

            </div>
        </nav>
    );
}

export default Header;
