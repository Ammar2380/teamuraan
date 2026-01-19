import React, { useEffect } from 'react' // Added useEffect
import AOS from 'aos'                      // Added AOS import
import 'aos/dist/aos.css'                  // Added AOS styles
import Lenis from 'lenis'                  // Updated import (Fixes the error)
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Design from './Components/Design'
import background from './Components/bg about.png'
import ProjectsSection from './Components/Project'
import Testimonials from './Components/Testinomial'
import ContactSection from './Components/Contact'
import CTASection from './Components/CTA'
import Footer from './Components/Footer'

const App = () => {
  useEffect(() => {
    // Initialize Smooth Scroll
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Your original AOS settings
    AOS.init({
      duration: 1000, 
      once: false,     
      easing: 'ease-in-out',
    })

    return () => lenis.destroy()
  }, [])

  return (<>



  <Navbar />
  <Hero/>
  <div  className="mx-auto px-4  text-[#FAF6EC] w-full min-h-450 flex flex-col justify-center items-center  relative z-0"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
          }} >
    <div data-aos="fade-up"><About/></div>
    <div data-aos="fade-up " ><Services/></div>
  </div>
  <div data-aos="fade-up" className='z-50'><Design/></div>
  <div data-aos="fade-up"><ProjectsSection/></div>
  <div data-aos="fade-up"><Testimonials/></div>
  <div data-aos="fade-up"><CTASection/></div>
  <div data-aos="fade-up"><ContactSection/></div>
  
  <Footer/>

   </>
  )
}

export default App