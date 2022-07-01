import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div className='h-[60px] z-10 bg-stone-100 shadow-md sticky top-0 w-full flex items-center justify-center'>
        <div className="w-full py-2 flex items-center h-full max-w-[1000px] px-[20%]  desktop:px-3 justify-between">
            <img className='aspect-square max-h-full'
             src="/src/images/logo.png" alt="" />
            <div className="flex items-center text-lg">
                <a className='ml-4 hover:text-blue-700' href="#home">Home</a>
                <a className='ml-4 hover:text-blue-700' href="#about">About</a>
                <a className='ml-4 hover:text-blue-700' href="#contact">Contact</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar