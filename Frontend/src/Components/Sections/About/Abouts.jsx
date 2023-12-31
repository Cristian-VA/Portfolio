import React, {useState , useEffect} from 'react'
import {HiArrowRight} from "react-icons/hi"
import "./About.scss"
import AppWrap from '../../../Wrapper/AppWrap'

const Abouts = () => {


  return (
    <div 
     className="app__about app__flex"
    >
        <div className="flex flex-col lg:flex-row gap-10">
         

            <div className="my-auto">
                < img src="../../Images/About&skillsImg.png" alt="" />
            </div>

            <div>
                <h1 className='text-sky-600 text-3xl mb-4 font-semibold'> ABOUT ME</h1>
                <p className='max-w-md text-slate-700 text-justify'>Hello! I'm Cristian, a front-end developer based in Lima, Peru. With a degree in Industrial Engineering from the <span className='font-semibold'>University of Lima, </span> I bring a unique blend of analytical thinking and creative flair to my coding projects.</p>
                <p className='max-w-md text-slate-700 mt-4 text-justify'>  Passionate about UI design, I craft digital experiences that engage users seamlessly. Off-screen, I enjoy watching movies and playing video games, finding inspiration in diverse storytelling mediums. <span className='text-slate-800 font-semibold'> Proficient in React, JavaScript, Tailwind CSS, and more,  </span> I thrive on turning ideas into interactive realities.</p>
                <p className='max-w-md text-slate-700 mt-4 text-justify'> As a <span className='font-semibold'> strong communicator </span> and <span className='font-semibold'> team player, </span> I'm dedicated to enhancing collaborations and creating impactful web solutions.</p>


              
                <a href="https://www.canva.com/design/DAFs2VBaJJ4/kBcRnAKXEqNp9CyXtNf1hQ/view" target="_blank"className=' w-44 border-2 border-sky-600 px-3 py-1 transition hover:text-sky-600 text-slate-700 opacity-90 mt-4 flex gap-2'>
                    <h1> View My Résumé  </h1>
                    < HiArrowRight className='my-auto'/>
                </a>
                
                  

                    
            </div>

        </div>
       
    </div>

  )
}

export default AppWrap(Abouts, "about", "../../Images/AboutBg.png")
