import React from 'react';
import { Link } from 'react-router-dom';
import mailBox from './images/mailBox.png';
import './Success.css';


export default function Success(){
    return(
        <div className="Success">
            <img src={mailBox} alt="Mail Box" />
            <h1>Message received. Thank you!</h1>
            <h3>I'll be in touch with you shortly.</h3>
            <Link className="Success-btn" to="/">Back to Home</Link>
        </div>
    );
}
