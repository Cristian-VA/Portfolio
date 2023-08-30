import React from 'react'
import "./Footer.scss"

export default function Footer() {
  return (
    <>
    <div className='app__footer app__flex shadow-xl flex-col'>
        <div className='flex gap-4 '>
            < img src="../../Images/FooterIcon.png" alt="" />
            <h1 className='text-uppercase'> Designed and Developed <br /> by Cristian Vega </h1>
            <h1 className='absolute bottom-0 left-0 m-2'> Copyright ©2023 <span className='text-sky-600 font-medium'> CristianDev </span>    </h1>
        </div>
      
     


    </div>
    
    </>
  )
}
