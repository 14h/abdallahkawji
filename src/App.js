import React, { Component }   from 'react';
import NavigationBar          from './NavigationBar';
import Projects               from './Projects';
import Experiences            from './Experiences';
import Contact                from './Contact';
import Intro                  from './Intro';
import Background             from './Background';
import Cat                    from './Cat';
import { Route }              from 'react-router-dom';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div
        style={{
          paddingTop    : '140px',
        }}
      >
        <Background />
        <Route path="*" component={ NavigationBar } />
        <Route exact path="/" component={ Intro } />
        <Route path="/projects" component={ Projects } />
        <Route path="/experiences" component={ Experiences } />
        <Route path="/contact" component={ Contact } />
        <Route path="/about" component={ Cat } />
      </div>
    );
  }
}