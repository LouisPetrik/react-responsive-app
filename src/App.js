import React, { Component } from 'react';
import Button from "./components/Button"
import Navbar from "./components/Navbar"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Button/>
      </div>
    );
  }
}

export default App;
