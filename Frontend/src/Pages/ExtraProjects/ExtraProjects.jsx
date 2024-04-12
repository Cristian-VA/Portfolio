import React from 'react'
import "./ExtraProjects.scss"
import { useState, useEffect } from 'react'
import { client } from '../../client'
import { Link } from 'react-router-dom'
const ExtraProjects = () => {
    const [pastWorks, setPastWorks] = useState([])


    useEffect(() =>{
     const query = "*[_type == 'pastProjects']"
   
     client.fetch(query)
     .then((data) =>{
        setPastWorks(data)
     })
   }, [])

   const pastWorkdsMap = pastWorks?.map((work, index) =>  (
    <div className='flex flex-col' key={index}>
        <h1 className='mb-1'>{work.title}</h1>
        <p className='text-[14px]'>{work.description}</p>
        <div className='flex text-[14px] mt-2 gap-4'>
            <a href={work.projectLink} target="_blank" className='  border-2 border-sky-600 px-3 py-1 transition hover:text-sky-600 text-slate-700 opacity-90  flex gap-2'>Live Link</a>
            <a href={work.codeLink} target="_blank" className='bg-slate-600 px-3 py-1 transition cursor-pointer hover:bg-slate-600 text-white opacity-90  flex gap-2 border-2 border-slate-600 '>Github</a>

        </div>

       

    </div>
    )
   )

   console.log(pastWorks)
   
  return (
    <div className='Extra_Projects_Height flex justify-center items-center flex-col'> 
        <div className='h-[50px] w-full'></div>
      <h1 className='text-3xl uppercase font-semibold text-slate-700 my-10'> Past  <span className='text-sky-600'> Projects </span></h1>
      <div className='flex flex-col px-6 max-w-[1000px] gap-4'>
        {pastWorkdsMap}
      </div>
        <Link to={"/#work"} className=' border-2 border-sky-600 px-3 py-1 transition hover:text-sky-600 text-slate-700 opacity-90  flex gap-2 my-6'>Go back to Homepage</Link>
    </div>
  )
}

export default ExtraProjects

