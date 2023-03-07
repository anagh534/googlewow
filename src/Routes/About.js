import React from 'react'
import Navbar from '../components/Navbar'
import hero from '../attributes/hero.svg'

export default function About() {
  return (
    <div>
        <Navbar />
        <img src={hero} alt="HeroSection" />
    </div>
  )
}
