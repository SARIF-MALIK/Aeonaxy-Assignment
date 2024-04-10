import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Athletes from './components/Athletes'
import Events from './components/Events'
import Footer from './components/Footer'

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
        <div>
          <Events/>
        </div>
        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default App
