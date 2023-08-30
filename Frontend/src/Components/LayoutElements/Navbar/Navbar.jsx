import React, {useState} from 'react'
import { BiMenu, BiX } from "react-icons/bi";
import { motion } from "framer-motion"
import "./Navbar.scss"

export default function Header() {

    const [toggle, setToggle] = useState(false)

 

  return (
    <nav className='app__navbar'>
    
        <div className='app__navbar-logo'>
            <img  src={"../../Images/Logo.png"}/>
            <div className='flex flex-col'>
                <h1 className='text-slate-600 uppercase font-bold text-md md:text-xl'> Cristian</h1>
                <h2 className='text-sky-600 uppercase text-lg md:text-2xl font-bold'>Dev</h2>
            </div>
        </div>
        <ul className='app__navbar-links'>
            {["home", "about", "work", "skills", "contact"].map((link) =>(
                <li key={`link-${link}`} className='app__flex p-text'>
                      
                        <a href={`#${link}`}>{link}</a>
                    
                </li>
            ))}
        </ul>
       
       <div className='app__navbar-menu'>
                <BiMenu onClick={() => setToggle(true)}/>

                { toggle?  (
                    <div className='app__navbar-menu-bg'>
                        <motion.div className="app_navbar-menu-motion"
                        initial={{ x: "40%" }}
                        animate={{ x: "calc(100vw - 99%)" }}
                        >

                            <BiX onClick={() => setToggle(false)}/>
                            <ul>

                            {["home", "about", "work", "skills", "contact"].map((link) =>(
                                
                                    <li key={link}>
                                            <a href={`#${link}`} onClick={() => setToggle(false)}>
                                                {link}
                                            </a>    
                                    </li>                 
                            ))}

                            </ul>
                        </motion.div>   
                    </div>
                ): ""}
       </div>
        

    </nav>
  )
}
