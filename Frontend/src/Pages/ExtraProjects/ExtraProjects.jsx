import React from 'react'
import "./ExtraProjects.scss"
import { useState, useEffect } from 'react'
import { client } from '../../client'
const ExtraProjects = () => {
    const [pastWorks, setPastWorks] = useState([])


    useEffect(() =>{
     const query = "*[_type == 'pastProjects']"
   
     client.fetch(query)
     .then((data) =>{
        setPastWorks(data)
     })
   }, [])

   console.log(pastWorks)
  return (
    <div className='Extra_Projects_Height flex justify-center items-center'> 
      <h1 className='text-3xl uppercase font-semibold text-slate-700 my-10'> Past  <span className='text-sky-600'> Projects </span></h1>
    </div>
  )
}

export default ExtraProjects

//