import React, { Component } from 'react';
import './App.css';
import LogoBanner from './components/logoBanner'
import TopBar from './components/topbar'
import TabBox from './components/tabbox'
import Prizes from './components/prizes';
import SponsorSSC from './components/sponsorSSC'


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <LogoBanner/>
        <TabBox/>
        <Prizes/>
        <SponsorSSC/>
      </div>
    );
  }
}

export default App;
