import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Athletes from './components/Athletes'

function App() {


  return (
    <div>
        <div>
        <Navbar/>
        </div>
        <div>
          <Home/>
        </div>
        <div>
          <About/>
        </div>
        <div>
          <Athletes/>
        </div>
    </div>
  )
}

export default App
