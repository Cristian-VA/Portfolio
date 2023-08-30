
import React,{useEffect, useState} from 'react'
import AppWrap from '../../../Wrapper/AppWrap'
import { motion }  from "framer-motion"
import { client, urlFor  } from "../../../client.js"
import { IoLogoGithub } from "react-icons/io5";
import {HiArrowRight} from "react-icons/hi"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "./Projects.scss"
import "./Slider.scss"

function Projects() {
 const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1})
 const [works, setWorks] = useState([])


 useEffect(() =>{
  const query = "*[_type == 'projects']"

  client.fetch(query)
  .then((data) =>{
    setWorks(data)
  })
}, [])

console.log(works[0]?.imgUrl)


  return (
    <>
    <h1 className='text-3xl uppercase font-semibold text-slate-700 my-10'> My  <span className='text-sky-600'> Portfolio </span></h1>

      <motion.div
      animate={animateCard}
      transition={{duration:0.5}}
      className='app__projects-porfolio'
      >
          {works.map((item, index) => (
        <div key={index} className='app__projects-item app__flex gap-1 flex-col lg:flex-row lg:gap-16 mb-20'>
          <div className='app__projects-img app__flex flex-col '>

          <h1 className='text-slate-600 font-semibold text-lg text-center  lg:hidden block'>{item.title}</h1>
          <AwesomeSlider className='mb-6 lg:border-slate-600 border-4  border-transparent lg:py-2'>
        {item?.imgUrl.map((imageUrl, index) => (
          <div key={index}>
            <img src={urlFor(imageUrl)} alt={`Image ${index + 1}`} />
          </div>
        ))}
         </AwesomeSlider>
        
      
          </div>

          <div className='app__projects-info-container'>
          <h1 className='text-slate-600 font-semibold text-xl text-center py-4 hidden lg:block'>{item.title}</h1>

          <div className='flex gap-2 px-6 mb-6 mt-6 lg:mt-0'>
            {item?.tags.map((tag, index) =>( 
              <h1 className='border-sky-600  border-2 px-1  lg:text-sm text-xs'>{tag}</h1> 
            ))}
          </div>

          <p className='px-6 text-justify text-sm lg:text-md text-slate-700 lg:h-28 '>{item.description}</p>

         
          <a href={item.projectLink} target="_blank" className=' border-2 border-sky-600 px-3 py-1 cursor-pointer transition hover:text-sky-600 text-slate-700 opacity-90 my-4 w-32  ml-6 flex gap-2'>
                    <h1> Live Demo </h1>
                    < HiArrowRight className='my-auto'/>
                    </a>
          
          
                    <a href={item.codeLink}  target="_blank" className=' bg-slate-600 px-3 py-1 transition cursor-pointer hover:bg-slate-600 text-white opacity-90 ml-6 flex gap-2 w-32'>
                    <h1> View Code </h1>
                    < IoLogoGithub className='my-auto text-lg'/>
                    </a>

          <img src={urlFor(item.icon)} className='absolute bottom-0 right-14' alt="" />
          </div>

          </div>
      ))}


      </motion.div>
      
    </>
  )
}


export default  AppWrap(Projects, "work", "../../Images/ProjectsBg.png")

