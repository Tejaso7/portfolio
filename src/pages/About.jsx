import React from 'react'
import Navbar from './components/Navbar'
import AboutHero from './components/AboutHero'
import OurMission from './components/OurMission'
import AboutContentSection from './components/AboutContentSection'
import AboutTeam from './components/AboutTeam'
import Clients from './components/Clients'
import Footer from './components/Footer'

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <OurMission />
      <AboutContentSection />
      <Clients />
      <AboutTeam />
      <Footer />
    </>
  )
}

export default About
