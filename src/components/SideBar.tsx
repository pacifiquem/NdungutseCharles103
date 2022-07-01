import React from 'react'
import { BiHome, BiUser } from 'react-icons/bi'

const SideBar: React.FC = () => {
  return (
    <div className='flex px-2 py-11 flex-col items-center w-[60px] h-screen'>
        <img className='aspect-square max-w-full'
             src="/src/images/logo.png" alt="" />
        <div className="flex flex-col items-center px-1 mt-[20vh]">
            <BiHome className='mt-3 text-3xl p-1 text-white bg-blue-400 rounded-md' />
            <BiUser className='mt-3 text-3xl p-1 text-white bg-blue-400 rounded-md' />
            <BiHome className='mt-3 text-3xl p-1 text-white bg-blue-400 rounded-md' />
          </div>     
    </div>
  )
}

export default SideBar