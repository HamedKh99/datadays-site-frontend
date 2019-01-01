import React, { Component } from 'react';
import './App.css';
import LogoBanner from './components/logoBanner'
import TopBar from './components/topbar'
import TabBox from './components/tabbox'
import Prizes from './components/prizes';
import SponsorSSC from './components/sponsorSSC'
import Schedule from './components/schedule';
import Footer from './components/footer'
import SocialNetworks from './components/socialNetworks'
import IntroduceTabContent from './components/introduceTabContent';
import FeatureCards from './components/featureCards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <LogoBanner/>
        {/* <TabBox/> */}
        <IntroduceTabContent/>
        <FeatureCards/>
        <Prizes/>
        <Schedule/>
        <SponsorSSC/>
        <Footer/>
        <SocialNetworks/>
      </div>
    );
  }
}

export default App;
