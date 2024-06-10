import React from 'react'
import './topNavStyle.css'
import {Link} from 'react-scroll'
import Home from '../../images/home.png'
import About from '../../images/about.png'
import Education from '../../images/education.png'
import Technology from '../../images/technology.png'
import HireMe from '../../images/hire.png'


const Topnavbar = () => {
    return(
        <>
        <nav className='navStyle'>
            <ul className='sort'>
                <li>
                    <Link to='bannerStyle' spy={true} smooth={true} duration={500}><b>THENGAL</b></Link>
                </li>
                <div className='rightNav'>
                    <li className=''>
                        <Link to='bannerStyle' spy={true} smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to='about' spy={true} smooth={true} duration={500}>About</Link>
                    </li>
                    <li>
                        <Link to='education' spy={true} smooth={true} duration={500}>Education</Link>
                    </li>
                    <li>
                        <Link to='technology' spy={true} smooth={true} duration={500}>Technologies</Link>
                    </li>
                    <li>
                        <Link to='contact' spy={true} smooth={true} duration={500}>Hire Me</Link>
                    </li>
                </div>
            </ul>
        </nav>
        <nav id='navStyle'>
            <ul>
                <li>
                    <Link to='bannerStyle' spy={true} smooth={true} duration={500}><img src={Home} alt='Home' /></Link>
                </li>
                <li>
                    <Link to='about' spy={true} smooth={true} duration={500}><img src={About} alt='Home' /></Link>
                </li>
                <li>
                    <Link to='education' spy={true} smooth={true} duration={500}><img src={Education} alt='Home' /></Link>
                </li>
                <li>
                    <Link to='technology' spy={true} smooth={true} duration={500}><img src={Technology} alt='Home' /></Link>
                </li>
                <li>
                    <Link to='contact' spy={true} smooth={true} duration={500}><img src={HireMe} alt='Home' /></Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Topnavbar