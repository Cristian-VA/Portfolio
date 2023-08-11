import React from 'react'
import NavDots from "../Components/LayoutElements/Navbar/NavDots.jsx"

const AppWrap = (Component, idName, BackgroundImage, classNames) => function HOC() {
  return (
    <div id ={idName} className={`app__container ${classNames} `}
    style={{
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
 
    }}>
        <div className='app__wrapper app__flex'>
                <Component/>
        </div>
    

    <NavDots
    active={idName}
    />

    </div>
  )
}

export default AppWrap
