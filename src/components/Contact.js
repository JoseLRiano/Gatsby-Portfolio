import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router";
import emailjs from 'emailjs-com';
import logo from './images/logo.png';
import Avatar from './images/avatar.png';
import './Contact.css';

export default function Contact(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault(); 
        let variables = { reply_to: email, from_name: name, message_html: message};

        emailjs.send('gmail','template',variables,'user')
        .then((res) => {
        return(<div>{history.push("/Success")}</div>)
        },(error) => {
        return(<div>{console.log(error.text)}</div>)
    });
        // FormSubmit(variables); //Call a fuction to send email
    };
    return (
        <div className="Contact">
            <div className="Contact-nav">
                <Link to="/" ><img className="Nav-logo" src={logo} alt="logo" /></Link>
                <Link className="Contact-back" to="/"><i className="fa fa-times" aria-hidden="true"></i></Link>
            </div>
            <div className="Contact-main">
                <img className="Contact-Avatar" src={Avatar} alt="Avatar" />
                <div>
                    <form className="Contact-form" onSubmit={handleSubmit}>
                        <div className="Form-column">
                            <div className="Form-item">
                                <label htmlFor="name">Name
                                    <input 
                                        name="name" 
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </label>
                                
                            </div>
                            <div className="Form-item">
                                <label htmlFor="email">Email
                                    <input 
                                        name="email" 
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        required
                                    />
                                </label>   
                            </div>
                        </div>
                        <div className="Form-item message">
                            <label htmlFor="message">Message
                                <textarea 
                                    name="message" 
                                    type="text"
                                    id="message"
                                    value={message}
                                    onChange={e => setMessage(e.target.value)}
                                    required
                                />
                            </label>
                            
                        </div>
                        <input className="Work-btn" type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
}
