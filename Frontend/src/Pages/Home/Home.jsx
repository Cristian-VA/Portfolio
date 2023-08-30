import React from 'react'
import Hero from '../../Components/Sections/Hero/Hero'
import Abouts from '../../Components/Sections/About/Abouts'
import Contact from '../../Components/Sections/Contact/Contact'
import Skills from '../../Components/Sections/Skills/Skills'
import Projects from '../../Components/Sections/Projects/Projects'

export default function Home() {
  return (
    <>
    <Hero/>
    <Abouts/>
    <Projects/>
    <Skills/>
    <Contact/>
    </>
   
  )
}
