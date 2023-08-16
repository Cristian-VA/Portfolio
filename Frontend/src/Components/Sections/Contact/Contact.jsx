import React, {useState} from 'react'
import AppWrap from '../../../Wrapper/AppWrap'
import {motion} from "framer-motion"
import { client  } from "../../../client.js"

import "./Contact.scss"
const Contact = () => {

    const [formData, setFormData] = useState({name: "", email: "", message: ""})
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const { username, email, message} = formData


    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      }

    const handleSubmit = async () => {
        setIsLoading(true);

    const contact = {
      _type: 'contact',
      email: formData.email,
      message: formData.message,
      name: formData.username,
    };
     
      client.create(contact)
      .then(() => {
        setIsFormSubmitted(true)
        setIsLoading(false)
      })
      .catch(console.error);
            
  }

  const RefreshForm = () => {
    setIsFormSubmitted(false)
    setFormData({name: "", email: "", message: ""})
  }

 

  return (
    <>
  
    <h1 className='text-3xl uppercase font-semibold text-slate-700 mt-10'> Get in  <span className='text-sky-600'> Touch </span></h1>

    <div className='app__contact-cards'>

        <div className='app__contact-card'>
            <img src="../src/Assets/ContactEmail.png" alt="" />
            <a href="mailto:cristian5vega@hotmail.com" className='text-xl mt-4'> <span className='text-sky-600'>cristian5vega</span>@hotmail.com </a>
        </div>

        <div className='app__contact-card'>
            <img src="../src/Assets/ContactPhone.png" alt="" />
            <a href="tel:+51949056056" className="text-xl mt-4"> <span className='text-sky-600'>+51 </span> 949 056 056 </a>
        </div>

        </div>


        {!isFormSubmitted ? ( 
        <div className='app__contact-form app__flex'
        >

            <div className='app__flex'>
                <input type="text"  placeholder='Your Name' name='username' value={username} onChange={handleChangeInput} />
            </div>

            <div className='app__flex'>
                <input type="email"  placeholder='Your Email' name='email' value={email} onChange={handleChangeInput} />
            </div>

            <div>
                <textarea  id="" cols="30" rows="5"
                placeholder='Your Message'
                value={message}
                name="message"
                onChange={handleChangeInput} />
            </div>

            <button 
            type='button'
            className='bg-sky-600 w-full md:w-56 py-2 text-lg transition hover:bg-slate-600 text-white opacity-90'
            onClick={handleSubmit}> {isLoading? "Sending...": "Send Message"}</button>

        </div>

        

   
    ): (
      <div className='flex flex-col justify-between h-full max-h-96 '>
        
        <div className='mt-10'>
        <h1 className='text-center  text-2xl'> Message received! </h1>
        
        <h1 className='text-center  text-xl mt-2  mb-10 font-semibold text-sky-600'>Thanks for Reaching out</h1>
        </div>
        <img src="../src/Assets/ContactSuccess.png" className="block mx-auto"alt="" />
        

        <button 
            type='button'
            className='bg-sky-600 w-full md:w-56 py-2 text-lg transition hover:bg-slate-600 text-white opacity-90'
            onClick={RefreshForm}> Display Form</button>
        </div>
        
     
    )}
    
    </>
  )
}
export default AppWrap(Contact, "contact", "../src/Assets/ContactBg.png")