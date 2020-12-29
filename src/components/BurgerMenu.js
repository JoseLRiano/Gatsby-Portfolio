import React, { useState, useRef, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { moveToAbout, moveToWork } from './MoveTo';
import { Link } from 'react-router-dom';
import './BurgerMenu.css';
import useLockBodyScroll from './useLockBodyScroll';


const BurgerMenu = () => {
    const [isOpen, toggle] = useState(false);
    
    const useOutsideClick = (ref) => {
        useEffect(() => {
            const handleClickOutside = (e) => {
                if( ref.current && !ref.current.contains(e.target)  ){
                        toggle(false);                    
                }
            }
            document.addEventListener('mousedown', handleClickOutside);
        }, [ref]);
    }



    
    const MenuAnimation = useSpring({
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? `translateX(0)` : `translateX(100%)`
    });
    

    const colorX = useSpring({
        fill: isOpen ? '#fafafa' : '#000',
    });

    const first = useSpring({
        transform:  isOpen ? 'translate(5px, 32px) rotate(-45deg)'
            : "translate(2px, 7px) rotate(0deg)"
    });
    const second = useSpring({
        transform:  isOpen ? 'translate(10px, 4px) rotate(45deg)'
            : "translate(2px, 19px) rotate(0deg)"
    });
    const third = useSpring({
        transform:  isOpen ? 'translate(5px, 32px) rotate(-45deg)'
            : "translate(2px, 31px) rotate(0deg)"
    });

    const Nav = () => {
        useLockBodyScroll()
        return (
            <animated.div className="Menu-Right" style={MenuAnimation}>
                <ul className="Burger-bar">
                <li className="Burger-item" onClick={() => {toggle(!isOpen); moveToAbout()}}>About</li>
                <li className="Burger-item" onClick={() => {toggle(!isOpen); moveToWork()}}>Work</li>
                    <li><Link className="Burger-item" to="contact">Contact</Link></li>
                </ul>
            </animated.div>
        );
    }

    const wrapperRef = useRef(null);
    useOutsideClick(wrapperRef);
    return (
        <div ref={wrapperRef} className="Burger-Menu">
            <animated.svg style={colorX}
                className="Burger-btn" 
                onClick={() => {toggle(!isOpen)}}
                width="40"
                height="32"
                viewBox="0 0 44 44"
                fill="#000"
                xmlns="http://www.w3.org/2000/svg"
            >
                <animated.rect width="40" height="4" rx="2" style={first} />
                <animated.rect width="40" height="4" rx="2" style={second} />
                <animated.rect width="40" height="4" rx="2" style={third} />
            </animated.svg>
            {isOpen && <Nav />}
            {/* <animated.div className="Menu-Right" style={MenuAnimation}>
                <ul className="Burger-bar">
                    <li className="Burger-item" >About</li>
                    <li className="Burger-item" >Work</li>
                    <li><Link className="Burger-item" to="contact">Contact</Link></li>
                </ul>
            </animated.div> */}
        </div>
    )
}
export default BurgerMenu;