import React from 'react'
import { BiEnvelopeOpen } from 'react-icons/bi'
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin, FaPhone } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <div className='flex flex-col mt-4 w-4/5 mx-auto'>
      <h1 className='text-center text-2xl font-bold'>Contact Me</h1>
      <div className="grid laptop:grid-cols-3 w-[280px] mx-auto md:w-full md:grid-cols-2 mt-4 flex-wrap">
        <div className="flex items-center p-3 ">
          <div className="flex items-center bg-blue-800 rounded-full
           text-white justify-center p-2">
            <BiEnvelopeOpen className='text-xl' /> 
          </div>
          <p className='ml-4'><a href="mailto:ndungutsecharles103@gmail.com">ndungutsecharles103@gmail.com</a></p>
        </div>
        <div className="flex items-center p-3 ">
          <div className="flex items-center bg-blue-800 rounded-full
           text-white justify-center p-2">
            <FaLinkedin className='text-xl' /> 
          </div>
          <p className='ml-4'><a href="mailto:ndungutsecharles103@gmail.com">ndungutsecharles103@gmail.com</a></p>
        </div>
        <div className="flex items-center p-3 ">
          <div className="flex items-center bg-blue-800 rounded-full
           text-white justify-center p-2">
            <FaPhone className='text-xl' /> 
          </div>
          <p className='ml-4'><a href="tel:+250790077264">+250 790077264</a></p>
        </div>
        <div className="flex items-center p-3 ">
          <div className="flex items-center bg-blue-800 rounded-full
           text-white justify-center p-2">
            <FaInstagramSquare className='text-xl' /> 
          </div>
          <p className='ml-4'><a href="mailto:ndungutsecharles103@gmail.com">ndungutsecharles103@gmail.com</a></p>
        </div>
        <div className="flex items-center p-3 ">
          <div className="flex items-center bg-blue-800 rounded-full
           text-white justify-center p-2">
            <FaGithubSquare className='text-xl' /> 
          </div>
          <p className='ml-4'><a href="mailto:ndungutsecharles103@gmail.com">ndungutsecharles103@gmail.com</a></p>
        </div>
        <div className="flex items-center p-3 ">
          <div className="flex items-center bg-blue-800 rounded-full
           text-white justify-center p-2">
            <FaGithubSquare className='text-xl' /> 
          </div>
          <p className='ml-4'><a href="mailto:ndungutsecharles103@gmail.com">ndungutsecharles103@gmail.com</a></p>
        </div>
      </div>
    </div>
  )
}

export default Contact