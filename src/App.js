import React from "react";
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import'react-bootstrap'
import './App.css';
import { Container, Navbar, Nav } from "react-bootstrap";

import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/About"
import ContactPage from "./pages/Contact"
import PortfolioPage from "./pages/Portfolio";
import ResumePage from "./pages/ResumePage";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      headerLinks: [
        {title: 'Home', path: '/portfolio'},
        {title: 'About', path: '/portfolio/about'},
        {title: 'Portfolio', path: '/portfolio/pastwork'},
        {title: 'Contact', path: '/portfolio/contact'},
        {title: 'Resume', path: '/portfolio/resume'}
      ],
      home: {
        title: "Leah O'Gorman",
      },
      about: {
        title: "Hi, I'm Leah",
        
      },
      portfolio: {
        title: "My Work",
      },
      contact: {
        title: "Contact Me",
      },
    }
  }

  render(){
    return [
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom justify-content-end" gb="transparent" expand="lg">
            <Navbar.Brand><Link className="nav-link brand" to="/portfolio">Leah O'Gorman</Link></Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                
                <Link className="nav-link" to="/portfolio/about">About</Link>
                <Link className="nav-link" to="/portfolio/pastwork">Portfolio</Link>
                <Link className="nav-link" to="/portfolio/contact">Contact</Link>
                {/* <Link className="nav-link" to="/portfolio/resume">Resume</Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/portfolio" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}/>
          <Route path="/portfolio/about" exact render={() => <AboutPage title={this.state.about.title} text={this.state.about.text}/>}/>
          <Route path="/portfolio/contact" exact render={() => <ContactPage title={this.state.contact.title} />}/>
          <Route path="/portfolio/resume" exact render={() => <ResumePage />}/>
          <Route path="/portfolio/pastwork" exact render={() => <PortfolioPage title={this.state.portfolio.title} subtitle={this.state.portfolio.subtitle} text={this.state.portfolio.text}/>}/>
          <Footer />
        </Container>
      </Router>
    ]
  }
}


export default App;
