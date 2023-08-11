import React from 'react'

export default function NavDots({active}) {
  return (
    <div className="app__navigation">
         {["home", "about", "work", "skills", "contact"].map((link) =>(                              
                <a 
                key={link}
                href={`#${link}`} 
                onClick={() => setToggle(false)}
                className='app__navigation-dot'
                style={active === link ? {backgroundColor: "#0284C795"} : {}}
                />
             
                            
        ))}
    </div>
  )
}
