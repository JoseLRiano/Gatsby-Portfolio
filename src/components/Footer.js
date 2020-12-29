import React from 'react';
import './Footer.css';
import whiteLogo from './images/whiteLogo.png';
import { Link } from 'react-router-dom';

export default function Footer(){
    return(
        <div className="Footer">
            <img className="logo" src={whiteLogo} alt="Logo" />
            <div className="Footer-media">
                <a className="Footer-item" href="https://twitter.com/joselriano" alt="twitter link" target="_blank"><i className="fa fa-twitter" ></i></a>
                <a className="Footer-item" href="https://github.com/JoseLRiano" alt="GitHub link" target="_blank"><i className="fa fa-github-alt" ></i></a>
                <a className="Footer-item" href="https://www.linkedin.com/in/jose-l-riano-15801795/" alt="linkedIn link" target="_blank"><i className="fa fa-linkedin"></i></a>
                <Link to="contact" className="Footer-item" href="https://github.com/JoseLRiano"><i className="fa fa-envelope-o" aria-hidden="true"></i></Link>
            </div>
            <small className="Footer-credit">Handcrafted by Jose Riano <span><i className="fa fa-copyright" aria-hidden="true"></i> 2020</span></small>
        </div>
    );
}