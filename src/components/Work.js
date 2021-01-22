import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import adoption from '../images/adoption.jpg';
import sebas from '../images/sebas.png';
import game from '../images/game.png';
import list from '../images/list.png';
import poke from '../images/poke.jpg';
import jokes from '../images/jokes.png';
import './Work.css';

const Work = ({data}) => {
    console.log(data.sebas.childImageSharp);
    let pics = [
        {name: 'sebastian website image', image: data.sebas.childImageSharp.fluid , description: 'Photgrapher Website using React', url:"http://sebastiantoro.me"}, 
        {name: 'adoption app image', image: data.adoption.childImageSharp.fluid ,description: 'Adoption App consumes petfinder API', url:"https://joselriano.github.io/AdoptionApp/" }, 
        {name: 'Lights Out game image', image: data.game.childImageSharp.fluid, description: 'React Lights Out game', url:"https://joselriano.github.io/LightsOut/" }, 
        {name: 'list App', image: data.list.childImageSharp.fluid, description: 'Grocery List App made using React Hooks', url:"https://joselriano.github.io/GroceriesList/" }, 
        {name: 'pokemon image App', image: data.poke.childImageSharp.fluid, description: 'Pokemon card game using API', url:"https://joselriano.github.io/PokedexGame/" },
        {name: 'Joke list image App', image: data.jokes.childImageSharp.fluid, description: 'List of Jokes uses API to fetch new Jokes and local storage.', url:"https://joselriano.github.io/DadJokes/" }];
    const projects =
        pics.map((project, i) => 
                <div className="Work-box" key={i}>      
                    <Img className="Box-image" fluid={project.image}  alt={project.name} />
                    <div className="Box-hide">
                        <h1 className="Box-project-title">
                            {project.description}
                        </h1>
                        <a href={project.url} target="_blank" className="Box-btn">
                            <span>Visit Website</span>
                            <span className="Box-arrow"><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
                        </a>
                    </div>
                </div>
        );
    return (
        <div id="Work" className="Work">
                <div className="Work-title">
                <h1>My Recent Work</h1>
                <p>These are some of my projects I've worked on recently.</p>
                </div>
                <div className="Work-examples">
                    {projects}
                </div>
                <a className="Work-btn" href="https://github.com/JoseLRiano" target="_blank"><FontAwesomeIcon icon={faGithub} pull="left" />See more on GitHub</a>
        </div> 
    );
}
export default Work;








  