import React, { Component } from 'react';
import GradebookContainer from '../containers/Gradebook.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GradebookContainer />
      </div>
    );
  }
}

export default App;
