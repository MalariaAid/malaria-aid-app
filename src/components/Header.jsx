
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { MdClose, MdMenu } from "react-icons/md";


const Header = () => {

  const [openMobileNav, setOpenMobileNav] = useState(false)

  const [screenWidth, setScreenWidth] = useState(window.innerWidth ?? 0);

  useEffect(() => {
    const handleScreenResize = () => {
      if (screenWidth > 10) {
        setOpenMobileNav(false);
      }
    };

    window.addEventListener("resize", handleScreenResize);

    return () => window.removeEventListener("resize", handleScreenResize);
  }, [screenWidth]);

  return (
    <>
    <header className="bg-white border-b sticky top-0 left-0 z-20">
        <nav aria-label="navigation-bar" className="mx-auto flex max-w-7xl items-center justify-between p-5 lg:px-8">
            <Link to={"/"} className="font-semibold text-2xl">
                MalariaAid
            </Link>
            <div className='hidden lg:flex items-center'>
              <Link to={"/"} className='p-2.5 px-6 hover-border-bottom-50 hover-border-bottom-50' >Home</Link>
              <Link to={"/services"} className='p-2.5 px-6 hover-border-bottom-50 hover-border-bottom-50' >Services</Link>
              <Link to={"/blog"} className='p-2.5 px-6 hover-border-bottom-50 hover-border-bottom-50' >Blog</Link>
              <Link to={"/location"} className='p-2.5 px-6 hover-border-bottom-50 hover-border-bottom-50' >Location</Link>
              <div className="flex items-center justify-center gap-x-3">
                <Link to={"/sign-in"} className='p-2.5 px-6 hover-border-bottom-50 hover-border-bottom-50' >Sign In</Link>
                <Link to={"/register"} className='bg-[#0f6429] hover:bg-[#308b4c] duration-300 p-2.5 px-6 rounded-md text-white '>Register</Link>
              </div>
            </div>
            <button className='lg:hidden bg-white border p-2 rounded-md' onClick={() => setOpenMobileNav((prevState) => !prevState)} >
              {openMobileNav ? <MdMenu className='text-[#0f6429]' /> : <MdClose className='text-[#0f6429]' /> }
            </button>
        </nav>
        <div className={`${openMobileNav ? "left-0 opacity-100 " : "-left-[100%] opacity-0" } lg:hidden duration-300 absolute h-dvh bg-white w-full z-30 p-5`} >
            <div className='flex flex-col gap-4 '>
              <Link onClick={() => setOpenMobileNav(false)} to={"/"} className='p-2.5 px-6 ' >Home</Link>
              <Link onClick={() => setOpenMobileNav(false)} to={"/services"} className='p-2.5 px-6 ' >Services</Link>
              <Link onClick={() => setOpenMobileNav(false)} to={"/blog"} className='p-2.5 px-6 ' >Blog</Link>
              <Link onClick={() => setOpenMobileNav(false)} to={"/location"} className='p-2.5 px-6 ' >Location</Link>
              <div className="flex flex-col gap-3">
                <Link onClick={() => setOpenMobileNav(false)} to={"/sign-in"} className='p-2.5 px-6 border rounded-md hover:bg-gray-100 duration-300 text-center' >Sign In</Link>
                <Link onClick={() => setOpenMobileNav(false)} to={"/register"} className='bg-[#0f6429] hover:bg-[#308b4c] text-center duration-300 p-2.5 px-6 rounded-md text-white '>Register</Link>
              </div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header