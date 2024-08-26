import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const AppLayout = () => {
  return (
    <div>
      <main className=' min-h-screen container'>
        <Header/>
        <Outlet />
      </main>
      <div className='p-3 text-xs text-center bg-gray-800 mt-10 text-gray-400'>Made through ReactJs By Aditya Pratap Singh</div>


    </div>
  )
}

export default AppLayout
