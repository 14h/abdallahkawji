import React, {Component} from 'react';



import './index.css';

export default class Contact extends Component{
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    
  }
  handleClick(event){
    let width = window.innerWidth || document.body.clientWidth;

    let contactLinks = document.getElementsByClassName('contact-link');

    console.log(document.getElementsByClassName('contact-link')[2].getBoundingClientRect())
    console.log(event.clientX, event.clientY)
    for (let i = 0; i < contactLinks.length; i++) {
        // console.log(contactLinks[i]); 
        if(event.clientY > contactLinks[i].getBoundingClientRect().top 
        && event.clientY < contactLinks[i].getBoundingClientRect().top+contactLinks[i].getBoundingClientRect().height 
        && event.clientX > contactLinks[i].getBoundingClientRect().x 
        && event.clientX < contactLinks[i].getBoundingClientRect().x+ contactLinks[i].getBoundingClientRect().width){
            contactLinks[i].click()
            // console.log('click',contactLinks[i])

        }
        
    }

  }
  componentDidMount() {
    document.addEventListener('click', this.handleClick);
   
  }
  render() {
    return (
        
        <div id="Contact">
           <h1>Get in touch!</h1>
           <h2>Write me an <a className= "contact-link" href="mailto:abdallah.kawji@gmail.com" target="_blank">email</a></h2>
           <h2>Call me on my <a className= "contact-link"  href="tel:+4917647610440" target="_blank">phone</a></h2>
           <h2>Find me on <a  className= "contact-link" href="https://www.linkedin.com/in/kawji/" target="_blank">LinkedIn</a>, <a  className= "contact-link" href="https://www.facebook.com/ryan4747" target="_blank">Facebook</a> or <a  className= "contact-link"  href="https://www.instagram.com/so_called_ryan/" target="_blank">Instagram</a></h2>
        </div>
      
    );
  }
}




