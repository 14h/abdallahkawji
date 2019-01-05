import React, {Component} from 'react';



import './index.css';

export default class Contact extends Component{
  componentDidMount(){
    (function smoothscroll(){
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo (0,currentScroll - (currentScroll/5));
        }
    })();
    const contact = document.getElementById('Contact');
    window.setTimeout(()=>{
      contact.style.opacity = 1;
      contact.style.marginBottom = 0;
    }, 200);

  }

  render() {
    return (
        <div
          id='Contact'
          style={{
            color           : '#FFF',
            transition      : 'all 0.5s linear',
            opacity         : 0,
            marginBottom    : '50px',
          }}
        >
           <div
              style={{
                fontSize    : '40px',
              }}
            >Get in touch!</div>
           <h2>Write me an <a href='mailto:abdallah.kawji@gmail.com' target='_blank' rel='noopener noreferrer'>email</a></h2>
           <h2>Call me on my <a href='tel:+4917647610440' target='_blank' rel='noopener noreferrer'>phone</a></h2>
           <h2>Find me on <a  href='https://www.linkedin.com/in/kawji/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>, <a href='https://www.facebook.com/ryan4747' target='_blank' rel='noopener noreferrer'>Facebook</a> or <a href='https://www.instagram.com/so_called_ryan/' target='_blank' rel='noopener noreferrer'>Instagram</a></h2>
        </div>
    );
  }
}




