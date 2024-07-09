import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {

  const [feedbackInput, setFeedBackInput] = useState({
    name: "",
    phoneNumber: "",
    message: ""
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFeedBackInput((prevState) => ({...prevState, [name]: value}))
  }

  return (
    <footer className='relative mt-32 text-center border-t bg-black text-white p-4 lg:px-16'>
      
      <div className="px-4 w-full lg:max-w-[1238px] lg:mx-auto grid grid-cols-1 absolute left-[50%] -translate-x-[50%] top-0 transform -translate-y-[50%] ">
        <div className="grid place-content-center grid-cols-1 lg:grid-cols-2 gap-4 p-4 py-10 rounded-lg bg-[#77a284]">
          <h2 className='text-2xl lg:text-4xl font-bold text-center lg:text-right px-5 self-center'>Subscribe to our newsletter</h2>
          <form className='w-full relative flex flex-col gap-3 lg:flex-row '>
            <input type="text" placeholder='Enter email address' className='p-2.5 w-full rounded-lg' />
            <button type='button' className='lg:absolute lg:top-[50%] lg:-translate-y-[50%] lg:right-0 bg-[#0f6429] hover:bg-[#308b4c] lg:w-max duration-300 p-2.5 px-10 rounded-md lg:rounded-r-md lg:rounded-l-none text-white '>Send</button>
          </form>
        </div>
      </div>

      <article className='grid grid-cols-12 gap-8 md:gap-5 mt-28'>
        <div className="col-span-12 md:col-span-5 lg:col-span-5 flex flex-col gap-4 items-start">
          <Link to={"/"} className="flex items-center">
            <h2 className='text-3xl font-bold'>MalariaAid</h2>
          </Link>
          <p className='text-left w-full lg:max-w-[440px]'>Lorem ipsum dolor sit amet consectetur. Volutpat sollicitudin enim fusce </p>
        
        <div className="flex items-center gap-5">
          <a href='/' className="bg-[#a0a0a0] hover:bg-white/90 duration-300 rounded-full h-10 w-10 flex items-center justify-center">
            <img src="./images/instagram.png" alt="instagram-icon" className='pointer-events-none scale-95' />
          </a>
          <a href='/' className="bg-[#a0a0a0] hover:bg-white/90 duration-300 rounded-full h-10 w-10 flex items-center justify-center">
            <img src="./images/facebook.png" alt="instagram-icon" className='pointer-events-none scale-95' />
          </a>
          <a href='/' className="bg-[#a0a0a0] hover:bg-white/90 duration-300 rounded-full h-10 w-10 flex items-center justify-center">
            <img src="./images/x.png" alt="instagram-icon" className='pointer-events-none scale-95' />
          </a>
          <a href='/' className="bg-[#a0a0a0] hover:bg-white/90 duration-300 rounded-full h-10 w-10 flex items-center justify-center">
            <img src="./images/linkdlin.png" alt="instagram-icon" className='pointer-events-none scale-95' />
          </a>
        </div>
        </div>

        <div className="col-span-12 md:col-span-7 lg:col-span-4 flex flex-col items-start gap-3">
          <div className="grid grid-cols-2 gap-4 w-full">           
            <div className="flex flex-col items-start gap-3 text-white/80">
            <h2 className='text-xl font-medium text-white'>Quick Links</h2>
              <Link to={"/"} >Get A Free Net</Link>
              <Link to={"/"} >About Malaria</Link>
              <Link to={"/"} >About Malaria</Link>
              <Link to={"/"} >Find A Centre</Link>
              <Link to={"/"} >FAQ</Link>
            </div>
          
            <div className="flex flex-col items-start gap-3 text-white/80">
              <h2 className='text-xl font-medium text-white'>Help</h2>
              <div className="flex flex-col items-start gap-3 text-white/80">
                <Link to={"/"} >Contact Us</Link>
                <Link to={"/"} >Accessibility</Link>
                <Link to={"/"} >Security</Link>
                <Link to={"/"} >Policies</Link>
              </div>
            </div>

          </div>
        </div>

        <div className="col-span-12 lg:col-span-3 flex flex-col items-start gap-3">
          <h2 className='text-xl font-medium'>Feedback</h2>
          <form className='w-full flex flex-col gap-y-4 text-black/80'> 
            <input onChange={handleChange} value={feedbackInput.name} type="text" name='name' id='name' placeholder='Name' className='bg-[#fafafa] w-full p-4 rounded-md'  />
            <input onChange={handleChange} value={feedbackInput.phoneNumber} type="text" name='phoneNumber' id='phoneNumber' placeholder='Phone Number' className='bg-[#fafafa] w-full p-4 rounded-md'  />
            <textarea onChange={handleChange} value={feedbackInput.message} rows={5} name='message' id='message' placeholder='Message' className='bg-[#fafafa] w-full p-4 rounded-md resize-x-none'></textarea>
            <button type='button' className='bg-[#0f6429] hover:bg-[#308b4c] w-max duration-300 p-2.5 px-10 rounded-md text-white '>Send</button>
          </form>
        </div>

      </article>
      <div className="text-center w-full border-t border-t-gray-50/50 mt-10 py-8">
        &copy; { new Date().getFullYear() } MalariaAid, All Rights Reserved
      </div>


    </footer>
  )
}

export default Footer