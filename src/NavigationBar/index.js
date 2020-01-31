import React from 'react';
import { Link } from 'react-router-dom'
import './index.css';



const navBar = () => document.getElementById('nav-bar');
const mainText = () => document.getElementById('main-text');
const subText = () => document.getElementById('sub-text');
const navBarGut = () => document.getElementById('nav-bar-gut');

const resetStyles = () =>
{
    mainText().style.fontSize = '38px';
    subText().style.fontSize = '15px';
    navBarGut().style.paddingTop = '30px';
    navBarGut().style.paddingBottom = '30px';
}
const registerScrollFunction = ( ) => {
	window.onscroll = () => {
		let currentScrollPos = window.pageYOffset;
		if( navBar() ){
			if (currentScrollPos < 10 ) {
                resetStyles();
			} else {
                mainText().style.fontSize = '20px';
                subText().style.fontSize = '0px';
                navBarGut().style.paddingTop = '5px';
                navBarGut().style.paddingBottom = '5px';
			}
		}
	}
}

const NavigationBar = (props) =>
{
    registerScrollFunction();

    return <div
        id='nav-bar'
        style={{
            position        : 'fixed',
            top             : 0,
            width           : '100%',
            transition      : 'all 0.5s',
            zIndex          : 10,
        }}
    >
        <Link
            to='/'
            id='nav-bar-gut'
            className='NavigationBar'
            style={{

                display         : 'flex',
                flexDirection   : 'column',
                textAlign       : 'center',
                justifyContent  : 'center',
                borderBottom    : 'solid 2px #FFF',
                paddingTop      : '30px',
                paddingBottom   : '30px',
                margin          : '0 auto',
                textDecoration  : 'none',
                color           : '#FFF',
                transition      : 'all 0.5s',
            }}
        >
            <div
                id='main-text'
                style={{
                    fontFamily      : "'VT323', monospace",
                    fontSize        : '38px',
                    transition      : 'all 0.5s',
                }}
            >
                <span style={{fontWeight: 'bold'}}>A</span>bdallah <span style={{fontWeight: 'bold'}}>K</span>awji
            </div>
            <div
                id='sub-text'
                style={{
                    fontFamily      : "'VT323', monospace",
                    fontSize        : '15px',
                    marginTop       : '10px',
                    transition      : 'all 0.5s',
                }}
            >
                Junior Software Developer
            </div>
        </Link>
        <div
            style={{
                display             : 'flex',
                flexDirection       : 'row',
                justifyContent      : 'flex-end',
                marginRight         : '30px',
                padding             : '20px',
                paddingTop          : 0,
            }}
        >
            {/*<Link*/}
            {/*    to='/projects'*/}
            {/*    className={ props.location.pathname.includes('projects') ? 'nav-item selected' : 'nav-item' }*/}
            {/*>*/}
            {/*    Projects*/}
            {/*</Link>*/}
            <Link
                to='/experiences'
                className={ props.location.pathname.includes('experiences') ? 'nav-item selected' : 'nav-item' }
            >
                Experiences
            </Link>
            {/*<Link*/}
            {/*    to='/about'*/}
            {/*    className={ props.location.pathname.includes('about') ? 'nav-item selected' : 'nav-item' }*/}
            {/*>*/}
            {/*    About Me*/}
            {/*</Link>*/}
            <Link
                to='/contact'
                className={ props.location.pathname.includes('contact') ? 'nav-item selected' : 'nav-item' }
            >
                Get in Touch!
            </Link>

        </div>
    </div>
}

export default NavigationBar;

