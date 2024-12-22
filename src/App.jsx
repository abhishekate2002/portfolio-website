import { useState } from 'react'
import './App.css'
import Project from './Project/Project'
import Experince from './Experince/Experince'
import Education from './Education/Education'
import Head from './Head/Head'
import Logo from './Logo/Logo'
import Socials from './Socials/logos/Socials'
import Aboutme from './Aboutme/Aboutme'
import Skills from './Skills/Skills'
import Achievements from './Achieve/Achieve'
import Certificate from './Achieve/Certificate'
function App() {
  return (
    <div className='container-is-the-main'>
    <div className='main-container'>

      <div className="group1">

        <div className="sub-group1">
          <Project/>
          <Experince/> 
          
        </div>         
        
        <div className="group-pf-edu-achi-cert">
        <Education/> 

        <div className="group-of-achiv-and-certifi">
          <Achievements/>
          <Certificate/>
        </div>

        </div>
         
        
      </div>

      <div className="group3">
        <Head/>
        <Logo/>
      </div>

      <div className="main-group-of-4-and-5">

          <Socials/>
          <Aboutme/>
          <Skills/>

        </div>

      </div>
      


    
     
    </div>
  )
}

export default App
