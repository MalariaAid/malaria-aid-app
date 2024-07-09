
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
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
        </nav>
    </header>
    </>
  )
}

export default Header