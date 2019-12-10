import React from 'react';
import { render } from 'react-dom';


import { Home } from './components/Home';

class App extends React.Component {
  render() {
    var user = {
      name: "Name"
    };
    return (
      <div className="container">
        <Home name={"Max"} age={27} />
        <Home />
      </div>
    )
  }
}


export default App;
