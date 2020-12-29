import React from 'react';
import adoption from './images/adoption.jpg';
import sebas from './images/sebas.png';
import game from './images/game.png';
import list from './images/list.png';
import poke from './images/poke.jpg';
import jokes from './images/jokes.png';
import './Work.css';

export default function Work(){
    let pics = [
        {name: 'sebastian website image', image: sebas, description: 'Photgrapher Website using React', url:"http://sebastiantoro.me"}, 
        {name: 'adoption app image', image: adoption ,description: 'Adoption App consumes petfinder API', url:"https://joselriano.github.io/AdoptionApp/" }, 
        {name: 'Lights Out game image', image: game, description: 'React Lights Out game', url:"https://joselriano.github.io/LightsOut/" }, 
        {name: 'list App', image: list, description: 'Grocery List App made using React Hooks', url:"https://joselriano.github.io/GroceriesList/" }, 
        {name: 'pokemon image App', image: poke, description: 'Pokemon card game using API', url:"https://joselriano.github.io/PokedexGame/" },
        {name: 'Joke list image App', image: jokes, description: 'List of Jokes uses API to fetch new Jokes and local storage.', url:"https://joselriano.github.io/DadJokes/" }];
    const projects =
        pics.map((project, i) => 
                <div className="Work-box" key={i}>      
                    <img className="Box-image" src={project.image}  alt={project.name} />
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
            <a className="Work-btn" href="https://github.com/JoseLRiano" target="_blank"><i className="fa fa-github" aria-hidden="true"></i> See more on GitHub</a>
        </div> 
    );
}