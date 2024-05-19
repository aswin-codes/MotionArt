import React from 'react'
import Logo from '../assets/MotionArtEffect-logo.png'

const Navbar = () => {
  return (
    <div className='flex px-5 py-5 items-center justify-between'>
        <div className='h-auto w-36 md:w-48'>
            <img src={Logo} alt='Logo'/>
        </div>
    </div>
  )
}

export default Navbar