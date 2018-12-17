import React, { Component } from 'react';
import './App.css';
import TopBar from './components/topbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
      </div>
    );
  }
}

export default App;
