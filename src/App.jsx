import { FaHome, FaWhatsapp } from 'react-icons/fa'
import './App.css'
import Footer from './component/Footer'
import Navbar from './component/Navbar'
import Trek from './component/Trek'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import First from './pages/first'
import Second from './pages/second'
import Third from './pages/third'
// import { useState } from 'react'

function App() {

  const [showButton, setShowButton] = useState(false);

  const scrollTop = () => {
    window.scrollTo({top: 0, behavior: "smooth"})
  };

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 20) {
        setShowButton(true);
      }else{
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>


      
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='trek' element={<Trek />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/first' element={<First />}></Route>
            <Route path='/second' element={<Second />}></Route>
            <Route path='/third' element={<Third />}></Route>
          </Routes>
      </BrowserRouter>
      <Trek />
      <Footer />

      {/* sticky whatsapp icon -left bottom */}

      <a href="" className='whatsapp-btn' target='_blank'>
        <FaWhatsapp />
      </a>

      {
        showButton && (
          <button className='home-btn' onClick={scrollTop}>
            <FaHome />
          </button>
        )
      }

    </>
  )
}

export default App
