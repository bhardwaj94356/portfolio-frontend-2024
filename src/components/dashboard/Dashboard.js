import React, { useState, useEffect } from 'react'
import Topnavbar from '../topnavbar/Topnavbar'
import './dashbordStyle.css'
import Code from '../../images/coding.gif'
import Program from '../../images/website.gif'
import BCA from '../../images/bca.gif'
import MCA from '../../images/mca.gif'
import ReactIcon from '../../images/react.gif'
import Html from '../../images/html.gif'
import Css from '../../images/css.gif'
import Node from '../../images/node.gif'
import Database from '../../images/database.gif'
import Contact from '../../images/contact.gif'

function Typewriter({ text }) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
      }, 200); // Adjust the interval duration as needed
  
      return () => {
        clearInterval(interval);
      };
    }, [text]);
  
    return <div>{text.slice(0, currentIndex)}</div>;
  }

  
  const Dashboard = () => {

    const[formData, setFormData] = useState({
      name:'',
      number:'',
      email:'',
      message:''
    });

    const handleChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevFormData) => ({
          ...prevFormData,
          [id]: value
      }));
  };
    const handleFormSubmit = async (event) => {
      event.preventDefault();

      try {
          const response = await fetch('http://localhost:3001/api/contact', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
          });

          const result = await response.json();
          if (response.ok) {
              alert('Message sent successfully!');
              setFormData({ name: '', number: '', email: '', message: '' }); // Clear the form after successful submission
          } else {
              alert(`Error: ${result.error}`);
          }
      } catch (error) {
          console.error('Error:', error);
          alert('Error sending message.');
      }
  };

    return(
      <>
        <Topnavbar />

        <div className='dashboardStyle'>

          {/* ----- BANNER SECTION ----- */}

          <div className='bannerStyle' id='bannerStyle'>
            <div className='bannerInside'>
              <img src={Program} alt='photograph of the owner' height='350px' width='350px' />
              <div className='myName'>
                <div className='nameStyle'>
                  <Typewriter text="Bhardwaj Thengal " />
                </div>
              </div>
            </div>
          </div>
          
          {/* ----- ABOUT SECTION ----- */}

          <div id='about' className='about'>
            <div>
              <p style={{fontSize:30}}><b>ABOUT</b></p>
            </div>
            <div className='aboutRight'>
              <p style={{color: "white", fontSize: "20px"}}>Hello, world!<br/>I am Bhardwaj Thengal<br/>Frontend and Backend Developer</p>
              <img src={Code} alt='Coding' height={250} width={250} style={{borderRadius: 15}} />
            </div>
          </div>

          {/* ----- EDUCATION SECTION ----- */}
          
          <div id='education' className='education'>
            <div className='eduDetails'>
              <div>
                <p style={{fontSize:30}}><b>EDUCATION</b></p>
              </div>
              <div className='eduInside'>
                <div className='bca'>
                  <img src={BCA} alt='BCA Certificate' height={250} width={250} style={{borderRadius: 15}} />
                  <p><b>BCA</b><br/>October 2013<br/>Sikkim Manipal University</p>
                </div>
                <div className='mca'>
                  <img src={MCA} alt='MCA Certificate' height={250} width={250} style={{borderRadius: 15}} />
                  <p><b>MCA</b><br/>October 2017<br/>Jorhat Engineering College</p>
                </div>
              </div>
            </div>
          </div>

          {/* ----- SKILLS/TECHNOLOGY SECTION ----- */}
          
          <div id='technology' className='skills'>
            <p style={{color:'white', marginTop: 100}}><b style={{fontSize:30}}>TECHNOLOGY</b><br/>Technologies used to create this portfolio</p>
            <div className='skillsCommon'>
              <img src={ReactIcon} alt='React icon' height={250} width={250} style={{borderRadius: 15, padding: '10px 0 0 0'}} />
              <p style={{color:'white'}}><b>REACT</b><br/>React is a JavaScript library for building<br/>user interfaces (UI) with JSX, a XML/HTML like syntax.</p>
            </div>
            <div className='skillsCommon' id='skillsHtml'>
              <p style={{color:'white'}} className='skillsHtmlPara'><b>HTML</b><br/>HTML stands for Hyper Text Markup Language<br/>and is the language for creating Web pages.</p>
              <img src={Html} alt='React icon' height={250} width={250} style={{borderRadius: 15, padding: '10px 0 0 0'}} className='skillsHtmlImage' />
            </div>
            <div className='skillsCommon'id='skillsReact'>
              <img src={Css} alt='React icon' height={250} width={250} style={{borderRadius: 15, padding: '10px 0 0 0'}} />
              <p style={{color:'white'}}><b>CSS</b><br/>CSS is used to define styles for your web pages,<br/>including the design, layout and variations<br/>in display for different devices and screen sizes.</p>
            </div>
            <div className='skillsCommon' id='skillsNode'>
              <p style={{color:'white'}}><b>NODE</b><br/>Node.js is an open source server<br/>environment that uses JavaScript on the server.</p>
              <img src={Node} alt='React icon' height={250} width={250} style={{borderRadius: 15, padding: '10px 0 0 0'}} />
            </div>
            <div className='skillsCommon' style={{marginBottom: 30, height: '100%', padding: '10px 0 0 0'}}>
              <img src={Database} alt='React icon' height={250} width={250} style={{borderRadius: 15}} />
              <p style={{color:'white'}}><b>DATABASE</b><br/>MySQL is an open-source relational database management<br/>system (RDBMS) that uses Structured Query Language (SQL)<br/>to store, manage, and retrieve structured data.</p>
            </div>
          </div>

          {/* ----- CONTACT SECTION ----- */}
          
          <div className='contact'>
            <p style={{fontSize:30}}><b>CONTACT</b></p>
            <div className='contactDetails'>
              <form className='leftContact' onSubmit={handleFormSubmit}>
                <input id='name' type='text' placeholder='Name' value={formData.name} onChange={handleChange} required />
                <input id='number' type='text' placeholder='Number' value={formData.number} onChange={handleChange} required />
                <input id='email' type='text' placeholder='E-mail' value={formData.email} onChange={handleChange} required />
                <input id='message' type='text' placeholder='Your Message' value={formData.message} onChange={handleChange} />
                <button type='submit'>Contact to Hire</button>
              </form>
              <div className='rightContact'>
                <img src={Contact} alt='Contact Icon' height={400} width={400} style={{borderRadius: 15}} />
              </div>
            </div>
            <div>
              <p>Contact form won't work due to the absence of a backend server.</p>
            </div>
          </div>

        </div>
      </>
    )
}

export default Dashboard;