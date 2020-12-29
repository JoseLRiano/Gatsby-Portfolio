import React from 'react';
import tag from './images/tag.png';
import css from './images/css.png';
import html from './images/html.png';
import js from './images/js.png';
import npm from './images/npm.png';
import react from './images/react.png';
import vs from './images/vs.png';
import './Experience.css';

export default function Experience(){
    return(
        <div className="Experience">
            <div id="Experience" className="Experience-skills">
               <div className="Skills-box">
                    <img className="Experience-icon" src={tag} alt="icon" />
                    <h2 className="Experience-title">Web Developer</h2>
                    <p className="Experience-text">
                        I like to create things from scratch, I enjoy coding and bringing ideas to life in the browser.
                    </p>
                    <h3 className="Experience-title-tools">
                        These are some of the Languagues/Frameworks/Libraries I speak:
                    </h3>
                    <p className="Experience-tools">
                        JavaScript | React | NodeJS | Express | Java | Spring | HTML | CSS(SASS)
                    </p>
                    <ul className="Experience-list">
                    <h3 className="Experience-title-tools">
                        Dev Tools:
                    </h3>
                        <li>Gatsby</li>
                        <li>Visual Studio</li>
                        <li>Bootstrap</li>
                        <li>Responsive Design</li>
                        <li>REST API</li>
                        <li>Github</li>
                        <li>Git</li>
                        <li>Terminal</li>
                        <li>WordPress</li>
                    </ul>
                    <div className="Experience-icon-skills">
                        <img src={js} alt="JavaScript logo" />
                        <img src={css} alt="Cascading Style Sheets logo" />
                        <img src={html} alt="HTML logo" />
                        <img src={react} alt="react logo" />
                        <img src={npm} alt="npm logo" />
                        <img src={vs} alt="visual studio logo" />
                    </div>
               </div>    
            </div>
        </div>
    );
}
