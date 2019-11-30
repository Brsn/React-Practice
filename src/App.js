import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Nav from './components/Nav.js';

class App extends React.Component {
  render() {
    const myName = "Bronson";
    const site = {
      url: 'https://reactjs.org/docs/react-api.html#createelement'
    }
    return (
      <div>
        <Home name={myName} mySite={site} />
        {/* here we define props.name in Nav.js --> */}
        <Nav name="Bronson" />
      </div>
    );
  }
}

export default App;