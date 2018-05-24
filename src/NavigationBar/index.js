import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

import './index.css';

export default class NavigationBar extends Component{
  render() {
    return (
        
        <div id="NavigationBar">
            <div className='navbar-list'>
                <div className='navbar-list-element link' onClick={()=>{ document.getElementById('Projects').scrollIntoView();window.scrollBy(0, -50);}}>
                    <h3>Projects</h3>
                </div>
                <div className='navbar-list-element link' onClick={()=>{ document.getElementById('Experiences').scrollIntoView();window.scrollBy(0, -50);}}>
                    <h3>Experiences</h3>
                </div>
                <div className='navbar-list-element link' onClick={()=>{ document.getElementById('Contact').scrollIntoView()}}>
                    <h3>Get in Touch!</h3>
                </div>
                

            </div>
        </div>
      
    );
  }
}




