import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import {About,Contact,Experience,Feedbacks,Hero,Navbar,Tech,Works,StarsCanvas} from"./components" 

import './App.css'

function App() {


  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary" >
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar></Navbar>
                  <Hero></Hero>
                  </div>    
                  <About />
                  <Experience/>
                  <Tech></Tech> 

                  <Works></Works>
                  <Feedbacks/>
                  <div className="realtive z-0">
                    <Contact />
                    <StarsCanvas />
                    </div>      
                    {/* <p>frfrr</p> */}
    </div>
    </BrowserRouter>
  
  )
}

export default App
