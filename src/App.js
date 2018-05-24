import React, { Component } from 'react';
// import FullpageComponent from './FullpageComponent'
import Backgroundcomponent from './Backgroundcomponent';
import NavigationBar from './NavigationBar';
import Experiences from './Experiences';
import Contact from './Contact';
import Intro from './Intro'
import Projects from './Projects'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    
  }
  handleClick(event){
    let width = window.innerWidth || document.body.clientWidth;

    let links = document.getElementsByClassName('link');

    for (let i = 0; i < links.length; i++) {
        // console.log(links[i]); 
        if(event.clientY > links[i].getBoundingClientRect().top 
        && event.clientY < links[i].getBoundingClientRect().top+links[i].getBoundingClientRect().height 
        && event.clientX > links[i].getBoundingClientRect().x 
        && event.clientX < links[i].getBoundingClientRect().x+ links[i].getBoundingClientRect().width){
            links[i].click()
            console.log('clicked')

        }
        
    }

  }
  componentDidMount() {
    document.addEventListener('click', this.handleClick);
   
  }
  render() {
    return (
      <div className="App">
        <Backgroundcomponent />
        <NavigationBar />
        <Intro />
        {/* <FullpageComponent /> */}
        <Projects />
        <Experiences />
        <Contact />
      </div>
    );
  }
}

export default App;
