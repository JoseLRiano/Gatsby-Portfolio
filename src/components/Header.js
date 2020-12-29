import React from 'react';
import { useSpring, animated, config } from 'react-spring';  
import Avatar from './images/avatar.png';
// import computer from './images/computer.png';
import './Header.css';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans = (x, y) => `translate3d(${x / 10}px,${y /10}px, 0)`; 

const Header = () => {

    const fade = useSpring({ 
        opacity: 1, 
        from: {opacity: 0}, 
        transform: 'translate3d(0, 0, 0)',
        from: {transform: 'translate3d(0, 300px, -300px)'},
        config: config.molasses 
    })

    const [movement, setMovement] = useSpring(() => ( { xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));

    const handleClick = () => {
        let work = document.querySelector('#Experience');
        work.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return(
        <div className="Header">
            <animated.div style={fade}>
                <div className="Header-Text">
                    <h1>Hello, I am Jose Riano.</h1>
                    <h3>I'm a Front End Web developer.</h3>
                </div>
                <div className="Header-Image" onMouseMove={({ clientX: x, clientY: y }) => setMovement({ xy: calc(x, y) })}>
                    <animated.img className="Header-Avatar" src={Avatar} alt="Avatar" style={{ transform: movement.xy.interpolate(trans) }} />
                </div>
                <button onClick={handleClick} className="Header-Button">View my work <i className="Header-Icon fa fa-arrow-right" aria-hidden="true"></i></button>
                {/* <img className="Header-computer" src={computer} alt="computer and laptop image" /> */}
            </animated.div>
        </div>
    );
}
export default Header;