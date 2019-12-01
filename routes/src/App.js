import React from 'react';
import { Router } from '@reach/router';
import logo from './logo.svg';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Home path="/" />
        <About path="/about" />
        <ContactUs path="/contact-us" />

      </Router>
    );
  }
}

export default App;
