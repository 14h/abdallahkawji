import React, { Component } from 'react';
// import FullpageComponent from './FullpageComponent'
import Backgroundcomponent from './Backgroundcomponent';
import NavigationBar from './NavigationBar';
import Experiences from './Experiences';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Backgroundcomponent />
        <NavigationBar />
        {/* <FullpageComponent /> */}
        <Experiences />
      </div>
    );
  }
}

export default App;
