import React, {Component} from 'react';

import './index.css';

export default class Intro extends Component{
  componentDidMount(){
    let interval_id = window.setInterval(()=>{}, 9999); // Get a reference to the last
                                                // interval +1
    for (let i = 1; i < interval_id; i++)
        window.clearInterval(i);
    (function smoothscroll(){
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
             window.requestAnimationFrame(smoothscroll);
             window.scrollTo (0,currentScroll - (currentScroll/5));
        }
    })();
    const intro = document.getElementById('Intro');

    const text = "Hello, my name is Abdallah Kawji, I'm a Junior Software developer based in Berlin.";
    const textArray = text.split('');
    const bar = document.createElement('span');
    bar.innerHTML = '|';
    bar.id = 'bar';
    textArray.forEach( (char,i) => {
      const charSpan = document.createElement('span');
      charSpan.innerHTML = char;
      window.setTimeout(()=>{
        intro.appendChild( bar );
      }, i*50);
      window.setTimeout(()=>{
        intro.appendChild( charSpan );
      }, i*30);
    });

    window.setInterval(()=>{
      const bar = document.getElementById( 'bar' );
      if( bar )
      {
        if( bar.style.visibility === 'visible' )
        {
          bar.style.visibility = 'hidden';
        }
        else
        {
          bar.style.visibility = 'visible';
        }
      }
    } , 300 )

  }
  render() {
    return (
      <div
        id='Intro'
        style={{
          color           : '#FFF',
          fontSize        : '25px',
          marginTop       : '40vh',
          transition      : 'opacity 0.5s linear',
          opacity         : 1,
        }}
      >
      </div>
    );
  }
}




