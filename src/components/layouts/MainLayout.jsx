import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import Header from '../Header'
import Footer from '../Footer'
import PageLoader from './PageLoader'


const MainLayout = () => {

  const [isPageLoading, setIsPageLoading] = useState(true);
  let interval;

  useEffect(() => {
    if(isPageLoading) {
      interval = setTimeout(() => {
        setIsPageLoading(false)
      }, 2000)
    }
    return () => clearInterval(interval)
  }, [])

  if(isPageLoading) {
    return <PageLoader />
  }

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