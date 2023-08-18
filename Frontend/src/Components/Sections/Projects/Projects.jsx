
import React,{useEffect, useState} from 'react'
import AppWrap from '../../../Wrapper/AppWrap'
import { motion }  from "framer-motion"
import { client, urlFor  } from "../../../client.js"

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
          <AwesomeSlider className='mb-6 lg:border-slate-600 lg:border-4 lg:py-2'>
        {item?.imgUrl.map((imageUrl, index) => (
          <div key={index}>
            <img src={urlFor(imageUrl)} alt={`Image ${index + 1}`} />
          </div>
        ))}
         </AwesomeSlider>
        
      
          </div>

          <div className='app__projects-info-container'>
          <h1 className='text-slate-600 font-semibold text-lg text-center py-4 hidden lg:block'>{item.title}</h1>

          <div className='flex gap-2 px-6 mb-6 mt-6 lg:mt-0'>
            {item?.tags.map((tag, index) =>( 
              <h1 className='border-sky-600  border-2 px-1  lg:text-sm text-xs'>{tag}</h1> 
            ))}
          </div>

          <p className='px-6 text-justify text-sm '>{item.description}</p>

         
          <button className='block ml-6 bg-sky-600 px-3 py-1 transition w-36 hover:bg-slate-600 text-white opacity-90 my-5' > Live demo</button>
          
          
          <button className='block ml-6 bg-sky-600 px-3 py-1 transition w-36 hover:bg-slate-600 text-white opacity-90'> Githup Repo</button>

          <img src={urlFor(item.icon)} className='absolute bottom-0 right-14' alt="" />
          </div>

          </div>
      ))}


      </motion.div>
      
    </>
  )
}


export default  AppWrap(Projects, "work", "../src/Assets/ProjectsBg.png")

