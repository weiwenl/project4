// import library components
import React, { Component } from 'react';

// import file components
import './App.css';
import Homepage from "./components/pages/Homepage"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Homepage />
        </header>
      </div>
    );
  }
}

export default App;
