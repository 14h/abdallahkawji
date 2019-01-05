import React, {Component} from 'react';


import './index.css';

export default class Projects extends Component{
    componentDidMount(){
        (function smoothscroll(){
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo (0,currentScroll - (currentScroll/5));
            }
        })();
        const projects = document.getElementById('Projects');
        window.setTimeout(()=>{
            projects.style.opacity = 1;
            projects.style.marginTop = 0;
        }, 200);

    }
    render() {
        return (
        <div
            style={{
                marginLeft      : '5vw',
                marginRight     : '5vw',
                minHeight       : '700px',
                maxWidth        : '100vw',
                transition      : 'all 0.5s linear',
                opacity         : 0,
                color           : '#FFF',
                paddingTop      : '30px',
                marginTop       : '50px',
            }}
            id='Projects'
        >

            <div className='Projects'>
                <div className='project'>
                    <a
                        className='project-title'
                        href='https://franshike.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <h2>FRANSHIKE.COM</h2>
                    </a>
                    <h4>(in Development)</h4>
                    <div className='project-description'>
                        <h5>Build with ReactJS,Ant Design, NodeJS, Firebase Hosting</h5>
                    </div>
                </div>
                <div className='project'>
                    <a
                        className='project-title'
                        href='https://carolinhauke.com/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <h2>CAROHAUKE.COM</h2>
                    </a>
                    <h4>(in Development)</h4>
                    <div className='project-description'>
                        <h5>Build with ReactJS, NodeJS, Firebase Hosting</h5>
                    </div>
                </div>
            </div>
            <div className='Projects'>
                <div className='project'>
                    <a
                        className='project-title'
                        href='http://squeezemotions.firebaseapp.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <h2>SQUEEZEMOTIONS</h2>
                    </a>
                    <h4>(in Development)</h4>
                    <div className='project-description'>
                        <h5>Build with ReactJS, NodeJS, Firebase Hosting</h5>
                    </div>
                </div>
                <div className='project'>
                    <a
                        className='project-title'
                        href='https://squeezemotions.firebaseapp.com/wedding'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <h2>SQUEEZEMOTIONS WEDDING</h2>
                    </a>
                    <h4>(in Development)</h4>
                    <div className='project-description'>
                        <h5>Build with ReactJS, NodeJS, Firebase Hosting</h5>
                    </div>
                </div>
            </div>
            <div className='Projects'>
                <div className='project'>
                    <a
                        className='project-title'
                        href='https://duderi.de/en/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <h2>DUDERI.DE</h2>
                    </a>
                    <h4>(in Development)</h4>
                    <div className='project-description'>
                        <h5>Build with ReactJS, NodeJS, Firebase Hosting, Firebase Functions, Firebase realtime Database</h5>
                    </div>
                </div>
                <div className='project'>
                    <a
                        className='project-title'
                        href='https://kamirankhalil.com'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <h2>KAMIRANKHALIL.COM</h2>
                    </a>
                    <h4>(Live)</h4>
                    <div className='project-description'>
                        <h5>Build with ReactJS, NodeJS, Firebase Hosting</h5>
                    </div>
                </div>
            </div>
            <div className='Projects'>
                <div className='project'>
                    <div className='project-title'>
                        <h2>C4ME</h2>
                    </div>
                    <h4>(DEAD)</h4>
                    <div className='project-description'>
                        <h5>Build with Ruby on Rails, sqlite3, AWS, bootstrap</h5>
                    </div>
                </div>
                <div className='project'>
                    <div className='project-title'>
                        <h2>NOTINSTAGRAM</h2>
                    </div>
                    <h4>(on HOLD)</h4>
                    <div className='project-description'>
                        <h5>Build with NodeJS, Google Maps API Firebase Hosting </h5>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}




