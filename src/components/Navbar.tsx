import React from 'react'
import logo from '../images/logo.png'

const Navbar: React.FC = () => {
  return (
    <div className='h-[60px] z-10 bg-stone-100 shadow-md sticky top-0 w-full flex items-center justify-center'>
        <div className="w-full py-2 flex items-center h-full max-w-[1000px] px-5 tablet:px-[20%]  desktop:px-3 justify-between">
            <a className='aspect-square max-h-full' href="#home"><img className='aspect-square max-h-full'
             src={logo} alt="charles" /></a>
            <div className="flex items-center text-lg">
                <a className='ml-4 hover:text-blue-700' href="#home">Home</a>
                <a className='ml-4 hover:text-blue-700' href="#about">About</a>
                <a className='ml-4 hover:text-blue-700' href="#about">Fields</a>
                <a className='ml-4 hover:text-blue-700' href="#about">Skills</a>
                <a className='ml-4 hover:text-blue-700' href="#contact">Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar