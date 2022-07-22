import React, { useState } from 'react'
import { BiMenu, BiSun } from 'react-icons/bi'
import { useApp } from '../contexts/AppContext'
import logo from '../images/logo.png'

const Navbar: React.FC = () => {
  const { isDark, setIsDark, themeClass, mobile, setMobile } = useApp()
  const mobileHan:any = ()=>{
    setMobile(false)
  }

  return (
    <div className={`h-[60px] z-10 ${themeClass.nav} ${mobile?'':'overflow-hidden'} shadow-md sticky top-0 w-full flex items-center justify-center`}>
        {mobile &&(
          <div  onClick={()=> setMobile(false)}
           className='absolute top-0 left-0 w-full h-screen z-[3]'></div>
        )}
        <div className="w-full z-[5] relative py-2 flex items-center h-full max-w-[1000px] px-5 tablet:px-[10%]  desktop:px-[10%] justify-between">
          <div onClick={mobile && mobileHan} className="w-full relative py-2 flex items-center h-full max-w-[1000px] px-5 tablet:px-[10%]  desktop:px-[10%] justify-between">
            <a onClick={()=> setMobile(false)} className='aspect-square max-h-full z-10' href="#home"><img className='aspect-square max-h-full'
             src={logo} alt="charles" /></a>
             <BiMenu onClick={()=> setMobile(!mobile)}
              className='tablet:hidden z-10 block text-3xl cursor-pointer' />
          </div>
            <div onClick={()=> setMobile(true)}
             className={`tablet:static z-50 flex flex-col duration-300
                tablet:flex-row items-center text-lg absolute ${mobile?`right-0 flex top-[3em] min-w-[200px] max-w-full w-[300px] ${themeClass.nav}`: ' right-[-500px] hidde'}`}>
                <a onClick={()=> setMobile(!mobile)} className='tablet:ml-4 p-2 hover:text-blue-700' href="#home">Home</a>
                <a onClick={()=> setMobile(!mobile)} className='tablet:ml-4 p-2 hover:text-blue-700' href="#about">About</a>
                <a onClick={()=> setMobile(!mobile)} className='tablet:ml-4 p-2 hover:text-blue-700' href="#about">Fields</a>
                <a onClick={()=> setMobile(!mobile)} className='tablet:ml-4 p-2 hover:text-blue-700' href="#about">Skills</a>
                <a onClick={()=> setMobile(!mobile)} className='tablet:ml-4 p-2 hover:text-blue-700' href="#contact">Contact</a>
                {/* <BiSun className='ml-3 cursor-pointer'
                onClick={()=> setIsDark(!isDark)} /> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar