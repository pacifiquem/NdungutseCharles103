import React, { useEffect, useState } from 'react'
import { Does } from '../contexts/data'
import { AnimationControls, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Projects = () => {
  const [works, setWorks] = useState(Does)

  return (
    <div className='flex pt-11 bg-gradient-to-b from-slate-100 via-slate-100 to-white w-full flex-col'>
      <h2 className="font-bold text-center text-2xl">My Recent Works</h2>
      {works.map((work: any, index: number)=>(
        <Work work={work} key={index} no={index} />
      ))}
      <div className="flex items-center justify-center mt-4">
        <a href='works' className="flex items-center text-white px-3 py-1 bg-blue-800 hover:bg-blue-700 duration-300">Show All Works 
        <p className='text-2xl ml-2'>&rarr;</p></a>
      </div>
    </div>
  )
}

export default Projects

const textVariant = {
  before: {opacity: 0, x: -400, transition: {duration: 3}},
  after: {opacity: 1, x: 0}
}

const imgVariant = {
  before: {opacity: 0, x: 400, transition: {duration: 3}},
  after: {opacity: 1, x: 0}
}


const Work = ({no, work}: any) => {
  const control: AnimationControls = useAnimation()
  const [proref, inView] = useInView()

  useEffect(()=>{
    if(inView){
      control.start("after");
      console.log("pro")
    }

  }, [control, inView])

  return(
    <div
     className={`tablet:flex flex flex-col tablet:flex-row border-[1px]
      border-slate-200 shadow-md p-[4%] gap-x-8 justify-center mt-[10vh] w-[80%] mx-auto ${no%2===0&&'tablet:flex-row-reverse'}`}>
      <motion.div
        ref={proref}
        variants={no%2===0?imgVariant:textVariant}
        animate={control}
        initial="before"
       className="tablet:w-[40%] overflow-hidden">
        <img src={work.image} alt="" />
      </motion.div>
      <motion.div
        ref={proref}
        variants={no%2===0?textVariant:imgVariant}
        animate={control}
        initial="before"
         className="flex tablet:w-[40%] flex-col">
        <h2 className='text-2xl font-bold'>{work.title}</h2>
        <p>{work.description}</p>
        <a href='works' className="flex mx-auto tablet:mx-0 items-center w-[160px] mt-[4vh] text-white px-3 py-1 bg-blue-800
         justify-center hover:bg-blue-700 duration-300">Visit Now
        <p className='text-2xl flex items-center ml-2 my-auto'>&rarr;</p>
        </a>
      </motion.div>
    </div>
  )
}