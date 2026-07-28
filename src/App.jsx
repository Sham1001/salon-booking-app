// import { Routes, Route } from 'react-router-dom'
import Navbar from "./component/Navbar.jsx"
import Footer from './component/Footer.jsx'
import Home from './page/Home.jsx'
import About from './page/About.jsx'
import Testimonial from './page/Testimonial.jsx'
import Gallery from './page/Gallery.jsx'
import Contact from './page/Contact.jsx'

function App() {


  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />

      <div className="flex-1">
        {/* <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes> */}
        <Home/>
        <About/>
        <Testimonial/>
        <Gallery/>
        <Contact/>

      </div>
      
      <Footer />

    </div>
  )
}

export default App
