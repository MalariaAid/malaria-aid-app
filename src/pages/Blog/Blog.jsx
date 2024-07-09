import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <section className='w-full  lg:max-w-[1032px] mx-auto p-4'>
     
     <div className=" my-36 mt-16">
      <div className="grid grid-col-1 lg:grid-cols-2 gap-5">
        <div className="flex flex-col gap-5 self-center">
          <h2 className='text-2xl font-bold'>All about Malaria</h2>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur. Volutpat sollicitudin enim fusce molestie tortor purus id at. Bibendum ac commodo pharetra augue mi aliquam.</p>
        </div>
        <div className="relative">
          <img src="./images/mosquito-2.png" alt="mosquito-2" className=' pointer-events-none' />
          <img src="./images/blood-sample.png" alt="blood-sample" className='hidden lg:block absolute -bottom-12 -left-8 pointer-events-none' />
          <img src="./images/drug-2.png" alt="drug-2" className='hidden lg:block absolute -top-12 right-3 pointer-events-none' />

        </div>
      </div>
     </div>
      <div className="my-7">
        <h2 className='text-center font-bold py-10 text-3xl '>Articles</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="">
              <img src="./images/blog-image-1.png" alt="blog-image-1" className='pointer-events-none rounded-3xl' />
            </div>
            <Link className='text-left w-full'>
              <h4 className='text-3xl'>Malaria: Preventive Measures</h4>
            </Link>
            <p className='text-sm text-gray-600  text-left lg:text-center self-center mt-auto'>Lorem ipsum dolor sit amet consectetur. Volutpat sollicitudin enim fusce molestie tortor purus id at.</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="">
              <img src="./images/blog-image-2.png" alt="blog-image-2" className='pointer-events-none rounded-3xl' />
            </div>
            <Link className='text-left w-full'>
              <h4 className='text-3xl'>Malaria: Symptoms</h4>            
            </Link>
            <p className='text-sm text-gray-600 text-left lg:text-center self-center mt-auto'>Lorem ipsum dolor sit amet consectetur. Volutpat sollicitudin enim fusce molestie tortor purus id at.</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="">
              <img src="./images/blog-image-3.png" alt="blog-image-3" className='pointer-events-none rounded-3xl' />
            </div>
            <Link className='text-left w-full'>
              <h4 className='text-3xl'>Malaria: Treatment</h4>            
            </Link>
            <p className='text-sm text-gray-600 text-left lg:text-center self-center mt-auto'>Lorem ipsum dolor sit amet consectetur. Volutpat sollicitudin enim fusce molestie tortor purus id at.</p>
          </div>
        </div>
        <Link className='ml-auto block w-max underline my-5'>View More</Link>
      </div>
      
      <div className="my-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 ">
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className='text-2xl font-bold'>Interview With Experts</h2>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur. Volutpat sollicitudin enim fusce molestie tortor purus id at.
              Lorem ipsum dolor sit amet consectetur. Volutpat sollicitudin enim fusce molestie tortor purus id at.</p>
          </div>
        </div>
        <Link className='ml-auto block w-max underline my-5'>View More</Link>
      </div>

    </section>
  )
}

export default Blog