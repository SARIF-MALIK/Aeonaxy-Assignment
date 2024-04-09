import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {


  return (
    <div>
        <div>
        <Navbar/>
        </div>
        <div>
          <Home/>
        </div>

    </div>
  )
}

export default App
