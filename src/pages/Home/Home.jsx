import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const [newletterInput, setNewsletterInput] = useState("");

  return (
    <>
    <section className="w-full flex flex-col gap-y-20 lg:gap-y-10">
      <div className="">
        <article className="w-full lg:max-w-[1032px] mx-auto my-[25px] lg:my-[40px] p-4 flex flex-col gap-y-4 lg:gap-y-6">
          <h2 className='text-2xl lg:text-5xl font-bold'>Hello, Joy</h2>
          <h4 className='text-lg md:text-2xl lg:text-5xl font-normal'>Identification No: ABC754321DE</h4>
          <div className="w-full">
            <img src='./images/hero-1.png' alt='hero-1' className='w-full h-full object-cover rounded-md pointer-events-none' />
          </div>
        </article>
        <article className='grid grid-col-1 lg:grid-cols-12 w-full p-4 lg:p-16  gap-5 lg:gap-20'>
          <div className="col-span-12 lg:col-span-4 order-1 lg:order-none">
            <div className="flex flex-col gap-y-5">
              <h2 className='text-5xl font-bold'>Consultation</h2>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur. Volutpat sollicitudin enim fusce molestie tortor purus id at.  Positive Malaria</p>
              <button className='bg-[#0f6429] hover:bg-[#308b4c] w-max duration-300 p-2.5 px-6 rounded-md text-white '>Get Started</button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8 ">
            <img src="./images/doctor-1.png" alt="doctor-1-image" className='rounded-md object-cover w-full h-full pointer-events-none' />
          </div>
        </article>

      </div>

      <div className="w-full">        
        <article className='grid grid-col-1 lg:grid-cols-12 w-full p-4 lg:p-16 gap-5 lg:gap-20'>
          
          <div className="col-span-12 lg:col-span-8 ">
            <img src="./images/doctor-2.png" alt="doctor-1-image" className='rounded-md object-cover w-full h-full pointer-events-none' />
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="flex flex-col gap-y-5">
              <h2 className='text-5xl font-bold'>Testing</h2>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur. Volutpat sollicitudin enim fusce molestie tortor purus id at.  Positive Malaria</p>
              <button className='bg-[#0f6429] hover:bg-[#308b4c] w-max duration-300 p-2.5 px-6 rounded-md text-white '>Get Started</button>
            </div>
          </div>
        </article>
      </div>

      <div className="w-full">        
        <article className='bg-[#e7efea] rounded-md grid grid-col-1 lg:grid-cols-12 w-full p-4 lg:p-16 gap-5 lg:gap-20'>
          
          <div className="col-span-12 lg:col-span-4 self-center order-1 lg:order-none">
            <div className="flex flex-col gap-y-5">
              <h2 className='text-5xl font-bold'>Net Request</h2>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur. Volutpat sollicitudin enim fusce molestie tortor purus id at.  Positive Malaria</p>
              <button className='bg-[#0f6429] hover:bg-[#308b4c] w-max duration-300 p-2.5 px-6 rounded-md text-white '>Request for a net</button>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-8">
            <img src="./images/drug.png" alt="doctor-1-image" className='rounded-md object-cover w-full h-full pointer-events-none' />
          </div>

        </article>
      </div>


      <div className="w-full">
        <article className='w-full grid grid-cols-12 gap-2 lg:gap-10 p-4 lg:p-16'>
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-y-5 self-center">
            <h1 className='text-4xl lg:text-5xl font-bold '>Latest Report on Malaria in Nigeria</h1>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur. Orci viverra ornare aenean augue in eu morbi non accumsan. Morbi a tellus lacus comm.</p>
          </div>
          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-10">
            
            <div className="flex flex-col gap-y-5">
              <div className="">
                <img src="./images/mosquito.png" alt="mosquito-image" className='rounded-md object-cover w-full h-full pointer-events-none' />
              </div>
              <h2 className='text-xl font-medium'>Malaria: Preventive Measures</h2>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur. </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <div className="">
                <img src="./images/mosquito.png" alt="mosquito-image" className='rounded-md object-cover w-full h-full pointer-events-none' />
              </div>
              <h2 className='text-xl font-medium'>Malaria: Preventive Measures</h2>
              <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet consectetur. </p>
            </div>

          </div>
        </article>
        <div className="w-full flex items-center px-4 lg:px-16">
          <Link className='my-5 text-right ml-auto underline'>View More</Link>
        </div>
      </div>

      <div className="w-full mb-8 flex flex-col items-center gap-5 gap-y-8 lg:max-w-xl mx-auto p-4 py-10">
        <h2 className='text-4xl lg:text-4xl font-bold'>Find A Centre</h2>
        <form className='w-full flex flex-col gap-3 gap-y-5'>
          <input onChange={(event) => setNewsletterInput(event.target.value)} value={newletterInput} className='p-3.5 border rounded-2xl bg-[#e7efea] placeholder:gray-600' type="text" name='location' id='location' placeholder='Current location' />
          <button type='button' className='bg-[#0f6429] hover:bg-[#308b4c] w-full duration-300 p-2.5 px-6 rounded-md text-white '>Find A Centre</button>
        </form>
      </div>


    </section>

    </>
  )
}

export default Home