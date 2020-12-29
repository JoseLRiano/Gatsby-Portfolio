import React from 'react';
import BurgerMenu from './BurgerMenu';
import { Link } from 'react-router-dom';
import { moveToAbout, moveToWork } from './MoveTo';
import logo from './images/logo.png'
import './Nav.css';

function Nav(){

    return(
        <div className="Nav">
            <Link to="/" ><img className="Nav-logo" src={logo} alt="logo" /></Link>
            <ul className="Nav-bar">
                <li className="Nav-item" onClick={moveToAbout}>About</li>
                <li className="Nav-item" onClick={moveToWork}>Work</li>
                <li><Link className="Nav-item" to="contact">Contact</Link></li>
            </ul>
            <BurgerMenu className="Burger-Menu" />
        </div>
    );
}
export default Nav;