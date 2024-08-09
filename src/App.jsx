import React, { useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Steps from './components/Steps'
import Brands from './components/Brands'
import Types from './components/Types'
import Plans from './components/Plans'
import Services from './components/Services'
import Footer from './components/Footer'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <Steps/>
      <Brands/>
      <Types/>
      <Plans/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
