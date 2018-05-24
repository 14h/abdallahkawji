import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

import './index.css';

export default class NavigationBar extends Component{
  render() {
    return (
        
        <div id="NavigationBar">
            <ul className="menu-links">
              <li className="menu-links-list-item" >
                  Home
              </li>
              <li className="menu-links-list-item" >
                  Projects
              </li>
              
          </ul>
        </div>
      
    );
  }
}




