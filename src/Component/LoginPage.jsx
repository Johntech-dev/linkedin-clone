import React from 'react'
import Logo from '../assets/Images/login-logo.svg'

import { Link } from 'react-router-dom'
function LoginPage() {
  return (
   <section>
    <nav  className='flex justify-between ml-4 mr-4 mt-4'>
      <img className='w-[150px]' src={Logo} alt='' />
    <div className='flex gap-4 items-center'>
      <h3 className='cursor-pointer hover:text-blue-500'>Join now</h3>
      <h3 className='rounded-full text-blue-500 border border-blue-500 md:w-[70px] p-2 cursor-pointer'>Sign in</h3>
    </div>
    </nav>
    <div className='md:flex gap-56 mt-[80px]'>
    <div>
      <h1  className='text-blue-500  text-[15px] md:text-[50px] font-light leaing-[25px] ml-14 md:ml-30'>Welcome to your Professional community</h1>
      <div className='flex border rounded-full items-center justify-center w-[280px] gap-2 mt-10 p-2 ml-14'>
      <img src='google.png' /><p>Sign in with Google</p>
      </div>
    </div>
    <img className='w-[500px] mt-[10px]' src='login-hero.png' />
    </div>
   </section>
  )
}

export default LoginPage
