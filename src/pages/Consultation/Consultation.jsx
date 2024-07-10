import React from 'react'

const Consultation = () => {
  return (
    <>
    <section className="w-full flex flex-col gap-y-20 lg:gap-y-10">
    <div className="relative">
      <article className="w-full lg:max-w-[1240px] mx-auto my-[40px] p-4 flex flex-col gap-y-4 lg:gap-y-6">
        <h2 className='text-2xl lg:text-5xl font-bold'>Hello, Joy</h2>
        <h4 className='text-2xl lg:text-5xl font-normal'>Identification No: ABC754321DE</h4>
        <div className="w-full">
          <img src='./images/doctor-3.png' alt='doctor-3' className='w-full h-full object-cover rounded-md pointer-events-none' />
        </div>
      </article>

      <div className="lg:absolute lg:right-0 lg:left-0 lg:bottom-0 lg:translate-y-[20%] grid grid-cols-1 lg:grid-cols-3 w-full lg:w-[1240px] mx-auto p-3 gap-4 ">
        <div className="bg-[#e7efea] hover:bg-gray-100 duration-300 cursor-pointer rounded-md p-6 flex flex-col justify-between ">
            <div className="flex items-center justify-between">
                <h2 className='text-2xl font-semibold w-[189px] '>Our Service Providers</h2>
                <img src="./images/arrow-right-green.png" alt="arrow-right-green" />
            </div>
            <div  className='mt-5'>
                <img src="./images/heart-icon.png" alt="heart-icon" className='' />
            </div>
        </div>

        <div className="bg-[#0f6429] hover:bg-[#2f9c50] duration-300 cursor-pointer rounded-md p-6 flex flex-col justify-between ">
            <div className="flex items-center justify-between">
                <h2 className='text-2xl font-semibold w-[189px] text-white'>Book an Appointment</h2>
                <img src="./images/arrow-right-white.png" alt="arrow-right-white" />
            </div>
            <div  className='mt-5'>
                <img src="./images/calendar-plus.png" alt="calendar-plus" className='' />
            </div>
        </div>

        <div className="bg-[#e7efea] hover:bg-gray-100 duration-300 cursor-pointer rounded-md p-6 flex flex-col justify-between ">
            <div className="flex items-center justify-between">
                <h2 className='text-2xl font-semibold w-[189px] '>Emergency Helpline</h2>
                <img src="./images/arrow-right-green.png" alt="arrow-right-green" />
            </div>
            <div  className='mt-5'>
                <img src="./images/telephone-icon.png" alt="telephone-icon" className='' />
            </div>
        </div>
        
      </div>
    </div>
    </section>

    <section className='w-full lg:mt-32 py-5 lg:max-w-[1240px] mx-auto rounded-lg p-4'>
        <div className="w-full bg-[#b1d8c1] rounded-md p-2">
            <h2 className='text-2xl font-bold my-6'>Consultation</h2>
            
            <div className="flex flex-col gap-y-5">
                <div className="w-full bg-white flex flex-col gap-4 px-3 md:px-5 py-8 rounded-md ">
                    <button type='button' className="w-full flex items-center justify-between">
                        <div className="flex-1 flex items-center gap-4 ">
                            <h2 className='text-sm md:text-base font-semibold'>Upcoming Appointment</h2>
                            <span>12/03/2024</span>
                        </div>
                        <div className="ml-auto w-[24px] shrink-0">
                            <img src="./images/arrow-down.png" alt="heart-icon" className='' />
                        </div>
                        
                    </button>
                    <p className='text-gray-500 text-left py-5'>Lorem ipsum dolor sit amet consectetur. Volutpat sollicitudin enim fusce molestie tortor purus id at.  Positive Malaria</p>
                
                    <div className="w-full flex items-center justify-center gap-5">
                        <button type='button' className="flex items-center gap-x-3 hover:bg-gray-100 duration-300 p-2.5 rounded-md">
                            <img src="./images/add-icon.png" alt="add icon" className='h-6 md:h-[30px] w-[27px]' />
                            <span className='text-sm md:text-base whitespace-nowrap'>Add to Calendar</span>
                        </button>

                        <button type='button' className="">
                            <span className='bg-[#0f6429] hover:bg-[#308b4c] w-max duration-300 p-2.5 md:p-3 md:px-6 rounded-md text-white '>Reschedule</span>
                        </button>
                    </div>
                </div>

                <div  className="w-full bg-white flex flex-col gap-4 px-5 py-8 rounded-md ">
                    <button type='button' className="w-full flex items-center justify-between">
                        <div className="flex-1 flex items-center gap-4">
                            <h2 className='font-semibold '>History</h2>
                            <span>12/01/2024</span>
                        </div>
                        <div className="ml-auto w-[24px] shrink-0">
                            <img src="./images/arrow-down.png" alt="heart-icon" className='' />
                        </div>
                        
                    </button>
                    <div className='text-gray-500 text-left py-5 flex flex-col '>
                        <div className="flex items-center justify-between md:justify-start gap-x-3">
                            <span className='text-base font-bold text-black/90'>Appointment Attended:</span>
                            <span>12/01/2024</span>
                        </div>
                        <div className="flex items-center justify-between md:justify-start gap-x-3">
                            <span className='text-base font-bold text-black/90'>Name of Doctor:</span>
                            <span>Dr Tade John</span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center  gap-x-20">
                            <div className="flex items-center justify-between md:justify-start gap-x-3 whitespace-nowrap">
                                <span className='text-base font-bold text-black/90'>Centre:</span>
                                <span>Tade Health Centre</span>
                            </div>
                            <div className="flex items-center justify-between md:justify-start">
                                <span className='text-base font-bold text-black/90'>Time: </span> <span>2:00pm</span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#b1d8c1] w-full rounded-lg p-5 flex items-center justify-between md:justify-start gap-x-4 ">
                        <span className='text-sm md:text-base font-bold text-black/90 whitespace-nowrap'>Appointment Attended</span>
                        <span>12/01/2024</span>
                    </div>
                </div>

            </div>

        </div>
    </section>
    
    </>
  )
}

export default Consultation