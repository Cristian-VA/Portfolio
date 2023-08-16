import React from 'react'
import NavDots from "../Components/LayoutElements/Navbar/NavDots.jsx"
import { motion } from 'framer-motion'

const AppWrap = (Component, idName, BackgroundImage ) => function HOC() {
  return (
    <motion.div id ={idName} className={`app__container relative `}
    style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
 
    }}
    
    whileInView={{opacity:[0,1]}}
    transition={{duration: 0.9}}>
      
        <div className='app__wrapper app__flex'>
                <Component/>
        </div>
    

    <NavDots
    active={idName}
    />

    </motion.div>
  )
}

export default AppWrap
