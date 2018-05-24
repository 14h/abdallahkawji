import React, { Component } from 'react';
// import FullpageComponent from './FullpageComponent'
import Backgroundcomponent from './Backgroundcomponent';
import NavigationBar from './NavigationBar';
import Experiences from './Experiences';
import Contact from './Contact';
import Intro from './Intro'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Backgroundcomponent />
        {/* <NavigationBar /> */}
        <Intro />
        {/* <FullpageComponent /> */}
        <Experiences />
        <Contact />
      </div>
    );
  }
}

export default App;
