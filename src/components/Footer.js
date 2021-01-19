import React from 'react';
import './Footer.css';
import whiteLogo from '../images/whiteLogo.png';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer(){
    return(
        <div className="Footer">
            <img className="logo" src={whiteLogo} alt="Logo" />
            <div className="Footer-media">
                <a className="Footer-item" href="https://twitter.com/joselriano" alt="twitter link" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="Footer-item" href="https://github.com/JoseLRiano" alt="GitHub link" target="_blank">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a className="Footer-item" href="https://www.linkedin.com/in/jose-l-riano-15801795/" alt="linkedIn link" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <Link to="contact" className="Footer-item" href="https://github.com/JoseLRiano">
                    <FontAwesomeIcon icon={faEnvelope} />
                </Link>
            </div>
            <small className="Footer-credit">Handcrafted by Jose Riano <span><i className="fa fa-copyright" aria-hidden="true"></i> 2020</span></small>
        </div>
    );
}