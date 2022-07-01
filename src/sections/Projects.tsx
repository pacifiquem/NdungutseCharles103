import React, { useState } from 'react'
import { Does } from '../contexts/data'

const Projects = () => {
  const [works, setWorks] = useState(Does)

  return (
    <div className='flex mt-11 bg-slate-50 w-full flex-col'>
      <h2 className="font-bold text-center text-3xl">My Works</h2>
      {works.map((work: any, index: number)=>(
        <Work work={work} key={index} no={index} />
      ))}
    </div>
  )
}

export default Projects

const Work = ({no, work}: any) => {

  return(
    <div className={`flex gap-x-8 justify-center mt-11 w-[80%] mx-auto ${no%2===0&&'flex-row-reverse'}`}>
      <div className="w-[40%] overflow-hidden">
        <img src={work.image} alt="" />
      </div>
      <div className="flex w-[40%] flex-col">
        <h2 className='text-2xl font-bold'>{work.title}</h2>
        <p>{work.description}</p>
      </div>
    </div>
  )
}