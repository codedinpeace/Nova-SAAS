import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Pricing from './Components/Pricing'
import Faq from './Components/Faq'
import Testimonials from './Components/Testimonials'
import Download from './Components/Download'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Pricing/>      
      <Faq/>
      <Testimonials/>
      <Download/>
      <Footer/>
    </div>
  )
}

export default App