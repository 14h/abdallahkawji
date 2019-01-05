import React, {Component} from 'react';



import './index.css';

export default class Experiences extends Component{
    componentDidMount(){
        (function smoothscroll(){
            var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo (0,currentScroll - (currentScroll/5));
            }
        })();
        const experiences = document.getElementsByClassName( 'exp_mid' );
        for( let experienceIndex in Array.from( experiences ) ){
            window.setTimeout(()=>{
                if( experiences.item( experienceIndex ) )
                {
                    experiences.item( experienceIndex ).style.opacity = 1;
                    experiences.item( experienceIndex ).style.marginTop = 0;
                }
            }, experienceIndex * 200);
        }

    }
    render() {
        return (
        <div
            id='Experiences'
            style={{
                marginLeft      : '5vw',
                marginRight     : '5vw',
                minHeight       : '700px',
                maxWidth        : '100vw',
                transition      : 'all 0.5s linear',
            }}

        >
            <div className='experience_content'>
                <div className='dot'></div>
                <div className='line'></div>
                <div className='exp_holder'>
                    <div className='exp_content exp_right exp_mid' style={{transition : 'all 0.5s linear', opacity : 0,  marginTop : '50px',}}>
                        <span className='exp_title'>Junior Software Developer</span><br/>
                        <span className='exp_work'>Styla GmbH</span>
                    </div>
                    <div className='exp_content exp_left exp_mid' style={{transition : 'all 0.5s linear', opacity : 0,  marginTop : '50px',}}>
                        <span className='exp_title'>WEB APP DEVELOPER</span><br/>
                        <span className='exp_work'>TheDive GmbH</span>
                    </div>
                    <div className='date_box'>
                        <div className='date_txt'>2018</div>
                    </div>
                    <div className='exp_content exp_right exp_mid' style={{transition : 'all 0.5s linear', opacity : 0,  marginTop : '50px',}}>
                        <a href='https://graduation.udacity.com/confirm/HUXT6K7R' target='_blank' rel="noopener noreferrer"><span className='exp_title'>FRONT-END WEB DEVELOPER NANODEGREE</span></a><br/>
                        <span className='exp_work'>Udacity</span>
                    </div>
                    <div className='exp_content exp_left exp_mid' style={{transition : 'all 0.5s linear', opacity : 0,  marginTop : '50px',}}>
                        <span className='exp_title'>Quality Assurance/ Tech Support</span><br/>
                        <span className='exp_work'>Styla GmbH</span>
                    </div>
                    <div className='date_box'>
                        <div className='date_txt'>2016</div>
                    </div>
                    <div className='exp_content exp_right exp_mid' style={{transition : 'all 0.5s linear', opacity : 0,  marginTop : '50px',}}>
                        <span className='exp_title'>Quality Assurance Intern</span><br/>
                        <span className='exp_work'>Styla GmbH</span>
                    </div>
                    <div className='date_box'>
                        <div className='date_txt'>2016</div>
                    </div>
                    <div className='exp_content exp_left exp_mid' style={{transition : 'all 0.5s linear', opacity : 0,  marginTop : '50px',}}>
                        <span className='exp_title'>Intern</span><br/>
                        <span className='exp_work'>Soundcloud</span>
                    </div>
                    <div className='date_box'>
                        <div className='date_txt'>2015</div>
                    </div>
                </div>
                <a className='icon_circle clickable' href='https://www.linkedin.com/in/kawji/' ><div className='icon_circle'></div></a>
            </div>
        </div>
        );
    }
}




