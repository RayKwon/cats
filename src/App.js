import React, { Component } from 'react';
import './App.css';
import PeopleContainer from './people/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PeopleContainer />
      </div>
    );
  }
}

export default App;
