//main imports
import React, { Component } from 'react';

//secondary imports
import Board from './layout/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
