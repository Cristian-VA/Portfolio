import React,{useEffect, useState} from 'react'
import AppWrap from '../../../Wrapper/AppWrap'
import { motion }  from "framer-motion"
import { client, urlFor  } from "../../../client.js"


import "./Skills.scss"

function Skills() {

  const [skills, setSkills] = useState([])

  useEffect(() =>{
    const query = "*[_type == 'skills']"

    client.fetch(query)
    .then((data) =>{
      setSkills(data)
    })
  }, [])


  return (
    <div className='app__skills '>
     <h1 className='text-center text-3xl font-semibold text-sky-600 uppercase'> Techstack</h1>

     <div className='app__skills-container'>
      <motion.div className='app__skills-list'>

      
      {skills.map((skill) =>(
        <motion.div
        whileInView={{opacity:[0,1]}}
        transition={{duration:0.5}}
        className='app__skills-item app__flex'
        key={skill.name}>

          <div className='app__flex bg-slate-100 shadow-sm'>
            <img src={urlFor(skill.icon)} alt='skill name'/>

            <p className='text-slate-700  mt-1 md:mt-2 font-semibold text-sm sm:text-md md:text-lg'>{skill.name}</p>

          </div>

        </motion.div>
      ))}
      </motion.div>
      <img src="../src/Assets/SkillsImg.png" alt=""  className='app__skills_img'/>
     </div>
    </div>
  )
}

export default  AppWrap(Skills, "skills", "")