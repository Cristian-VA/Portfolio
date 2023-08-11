import React, {useState} from 'react'
import AppWrap from '../../../Wrapper/AppWrap'
import "./Contact.scss"
const Contact = () => {

    const [formData, setFormData] = useState({name: "", email: "", message: ""})
    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const { name, email, message} = formData

    const handleChangeInput = (e) => {
     const { name, value } = e.target

     setFormData({...formData, [name]: value})
    }

    const handleSubmit = () => {
        setIsLoading(true)

        const contact = {
           _type: "contact",
           name: name,
           email: email,
           message: message,
        }

        //client.create(contact)
        //.then(() => {
        // setLoading(false)
        // setIsFormSubmitted(true)
        //})
    }

  return (
    <>
    <h1 className='text-3xl uppercase font-semibold text-slate-700'> Get in  <span className='text-sky-600'> Touch </span></h1>

    <div className='app__contact-cards'>

        <div className='app__contact-card'>
            <img src="../src/Assets/ContactEmail.png" alt="" />
            <a href="mailto:cristian5vega@hotmail.com" className='text-xl'> <span className='text-sky-600'>cristian5vega</span>@hotmail.com </a>
        </div>

        <div className='app__contact-card'>
            <img src="../src/Assets/ContactPhone.png" alt="" />
            <a href="tel:+51949056056" className="text-xl"> <span className='text-sky-600'>+51 </span> 949 056 056 </a>
        </div>

        </div>


        {!isFormSubmitted ? ( 
        <div className='app__contact-form app__flex'>

            <div className='app__flex'>
                <input type="text"  placeholder='Your Name' name='name' value={name} onChange={handleChangeInput}/>
            </div>

            <div className='app__flex'>
                <input type="email"  placeholder='Your Email' name='email' value={email} onChange={handleChangeInput}/>
            </div>

            <div>
                <textarea  id="" cols="30" rows="10"
                placeholder='Your Message'
                value={message}
                name={message}
                onChange={handleChangeInput}></textarea>
            </div>

            <button 
            type='button'
            onClick={handleSubmit}> {isLoading? "Sending...": "Send Message"}</button>

        </div>

        

   
    ): "nt"}
    </>
  )
}
export default AppWrap(Contact, "contact", )