import React from 'react'
import Hero from '../../Components/Sections/Hero/Hero'
import Abouts from '../../Components/Sections/About/Abouts'
import Contact from '../../Components/Sections/Contact/Contact'
import Skills from '../../Components/Sections/Skills/Skills'
import Projects from '../../Components/Sections/Projects/Projects'
import {motion} from "framer-motion"
export default function Home() {
  return (
    <>
    <Hero/>
    <Abouts/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
   
  )
}
