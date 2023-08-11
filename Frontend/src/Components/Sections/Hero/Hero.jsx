import React from 'react'
import {motion} from "framer-motion"
import "./Hero.scss"
import {HiArrowDown} from "react-icons/hi"
import AppWrap from '../../../Wrapper/AppWrap'

const Hero = () => {
  return (
    <div className='app__hero flex flex-col justify-center align-center items-center lg:flex-row gap-10'>
        <motion.div
        whileInView={{x: [-100, 0], opacity:[0,1]}}
        transition={{duration: 0.5}}
        className='app__hero-info'
        >
            <h1 className='mb-4 text-slate-700 font-medium'>Hello, my name is <span className='text-sky-600'> Cristian, </span> </h1>

                <motion.div
                    whileInView={{opacity:[0,1]}}
                    transition={{duration: 0.5, delay:0.5}}
                    className='text-lg'
                    >
                        <h1 className='max-w-lg text-md md:text-xl text-justify'>I'm a creative front-end developer based in Lima, Peru. My journey revolves around crafting captivating digital experiences that seamlessly meld design with technology.</h1>
                                <motion.div className='flex mt-3 gap-6'
                                    whileInView={{opacity:[0,1]}}
                                    transition={{duration: 0.5, delay:1}}>
                                                <button className='bg-sky-600 px-3 py-1 transition hover:bg-slate-600 text-white opacity-90'>Contact</button>
                                                <button className=' border-2 border-sky-600 px-3 py-1 transition hover:text-sky-600 text-slate-700 opacity-90'>View My Work </button>
                                 </motion.div>
                                 
                </motion.div>
                      
              
                <div className="floating-container">

     <motion.div
      whileInView={{opacity:[0,1]}}
      transition={{duration: 0.5, delay:1.2}}>      
      <motion.div
        className="floating-element"
        animate={{
          y: [0, 10, 0], 
        }}
        
        transition={{
          duration: 2, 
          repeat: Infinity, 
          ease: "easeInOut", 
          
        }}

      >  <HiArrowDown className='my-auto mr-2'/>
         <h1 >Scroll down to check other info...</h1>
      </motion.div>
      </motion.div>   
      
    </div>

          

        </motion.div>

        <motion.div
        whileInView={{scale:[0,1]}}
        transition={{duration:1, ease:"easeInOut"}}>
        <img className='w-44 md:w-80'  src={"../src/Assets/HeroImg.png"}/>
        </motion.div>
    </div>
  )
}

export default AppWrap(Hero, "home", "../src/Assets/HeroBg.png")