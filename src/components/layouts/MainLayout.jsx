import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Header'
import Footer from '../Footer'


const MainLayout = () => {
  return (
    <>
    <div className="flex flex-col min-h-dvh">
        <Header />
          <main className='mx-auto w-full'>
              <Outlet />
          </main>
        <Footer />
    </div>
    </>
  )
}

export default MainLayout