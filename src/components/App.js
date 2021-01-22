import React from 'react';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Experience from './Experience';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';
import Success from './Success';
import './App.css';

import { StaticQuery, graphql } from 'gatsby';


function App() {
  
  return (
    <StaticQuery query={graphql`{
          adoption: file(relativePath: {eq: "adoption.jpg"}) {
              childImageSharp {
                  fluid(maxWidth: 1600) {
                      ...GatsbyImageSharpFluid
                  }
              }
          }
      }`}
    render={(data) =>(
    <div>
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
