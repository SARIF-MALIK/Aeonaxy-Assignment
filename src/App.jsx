import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'

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

    </div>
  )
}

export default App
