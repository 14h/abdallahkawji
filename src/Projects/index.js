import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

import './index.css';

export default class Projects extends Component{
  render() {
    return (
        
        <div id="Projects">
            <h1 className='title'>Projects</h1>
            <div className="Projects">
                <div className='project'>
                    <div className='project-title'><h2>DUDERI.DE</h2></div>
                    <h4>(in Development)</h4>
                    <div className='project-description'><h5>Build with ReactJS, NodeJS, Firebase Hosting, Firebase Functions, Firebase realtime Database</h5></div>
                </div>
                <div className='project'>

                    <div className='project-title'><h2>KAMIRANKHALIL.DE</h2></div>
                    <h4>(Live)</h4>
                    <div className='project-description'><h5>Build with ReactJS, NodeJS, Firebase Hosting</h5></div>
                </div>
            </div>
            <div className="Projects">
                <div className='project'>
                    <div className='project-title'><h2>C4ME</h2></div>
                    <h4>(DEAD)</h4>
                    <div className='project-description'><h5>Build with Ruby on Rails, sqlite3, AWS, bootstrap</h5></div>
                </div>
                <div className='project'>

                    <div className='project-title'><h2>NOTINSTAGRAM</h2></div>
                    <h4>(on HOLD)</h4>
                    <div className='project-description'><h5>Build with NodeJS, Google Maps API Firebase Hosting </h5></div>
                </div>
            </div>
        </div>
      
    );
  }
}




