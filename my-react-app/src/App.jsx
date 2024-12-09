import { useState } from 'react'
import './App.css'
import Project from './Project/Project'
import Experince from './Experince/Experince'
import Education from './Education/Education'
import Head from './Head/Head'
function App() {
  return (
    <>
    <div className='main-container'>

      <div className="group1">

        <div className="sub-group1">

          <Project/>
          <Experince/> 

        </div>         

        <Education/>

         
      </div>

      <div className="group3">
        <Head/>
      </div>
    
    </div>
     
    </>
  )
}

export default App
