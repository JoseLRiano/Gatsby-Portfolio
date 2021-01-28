import React from 'react';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';
import Success from './Success';
import { Seo }  from './Seo';
import './App.css';

import { StaticQuery, graphql } from 'gatsby';


function App() {
  
  return (
    <StaticQuery query={graphql`{
          adoption: file(relativePath: {eq: "adoption.jpg"}) {
              childImageSharp {
                  fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
          jokes: file(relativePath: {eq: "jokes.png"}) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          poke: file(relativePath: {eq: "poke.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          sebas: file(relativePath: {eq: "sebas.png"}) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          list: file(relativePath: {eq: "list.png"}) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          game: file(relativePath: {eq: "game.png"}) {
            childImageSharp {
              fluid(maxWidth: 1600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }`}
    render={(data) =>(
    <div>
      <Seo />
      <Nav />
      <Header />
      <About />
      <Experience />
      <Work data={data}/>
      <Footer />
    </div>
    )} 
    />

  );
}

export default App;
