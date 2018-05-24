import React, {Component} from 'react';



import './index.css';

export default class Contact extends Component{
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        
        <div id="Contact">
           <h1>Get in touch!</h1>
           <h2>Write me an <a className= "ink" href="mailto:abdallah.kawji@gmail.com" target="_blank">email</a></h2>
           <h2>Call me on my <a className= "link"  href="tel:+4917647610440" target="_blank">phone</a></h2>
           <h2>Find me on <a  className= "link" href="https://www.linkedin.com/in/kawji/" target="_blank">LinkedIn</a>, <a  className= "link" href="https://www.facebook.com/ryan4747" target="_blank">Facebook</a> or <a  className= "link"  href="https://www.instagram.com/so_called_ryan/" target="_blank">Instagram</a></h2>
        </div>
      
    );
  }
}




