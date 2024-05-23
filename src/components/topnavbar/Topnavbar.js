import React from 'react'
import './topNavStyle.css'
import {Link} from 'react-scroll'


const Topnavbar = () => {
    return(
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
        // <div className='navStyle'>
        //     <div className='sort'>
        //         <b>THENGAL</b>
        //         <div className='rightNav'>
        //             <p>Home</p>
        //             <p>About</p>
        //             <p>Education</p>
        //             <p>Skills</p>
        //             <p>Contact</p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Topnavbar