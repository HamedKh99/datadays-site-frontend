import React, { Component } from 'react';
import './App.css';
import LogoBanner from './components/logoBanner'
import TopBar from './components/topbar'
import TabBox from './components/tabbox'


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <LogoBanner/>
        <TabBox/>
      </div>
    );
  }
}

export default App;
