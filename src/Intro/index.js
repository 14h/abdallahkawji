import React, {Component} from 'react';

import './index.css';

// const THE_ZEN_OF_PYTHON = [
//   "Beautiful is better than ugly.",
//   "Explicit is better than implicit.",
//   "Simple is better than complex.",
//   "Complex is better than complicated.",
//   "Flat is better than nested.",
//   "Sparse is better than dense.",
//   "Readability counts.",
//   "Special cases aren't special enough to break the rules.",
//   "Although practicality beats purity.",
//   "Errors should never pass silently.",
//   "Unless explicitly silenced.",
//   "In the face of ambiguity, refuse the temptation to guess.",
//   "There should be one-- and preferably only one --obvious way to do it.",
//   "Although that way may not be obvious at first unless you're Dutch.",
//   "Now is better than never.",
//   "Although never is often better than *right* now.",
//   "If the implementation is hard to explain, it's a bad idea.",
//   "If the implementation is easy to explain, it may be a good idea.",
//   "Namespaces are one honking great idea -- let's do more of those!",
// ]

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

    const text = "Hello, my name is Abdallah Kawji, I'm a Junior Software Developer based in Berlin.";
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




