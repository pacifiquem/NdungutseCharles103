import React, { ReactChildren, useEffect, useState } from 'react'
import { Does } from '../contexts/data'
import { AnimationControls, motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import WorkSlider from '../components/WorkSlider'

const Projects = () => {
  const [works, setWorks] = useState<any>([])
  const [allShown, setAllShown] = useState<boolean>(false)

  useEffect(() => {
    setWorks(Does.slice(0, 4))
  }, [])

  return (
    <div id='projects' className='flex pt-11 bg-gradient-to-b from-slate-100 via-slate-100 to-white w-full flex-col'>
      <h2 className="font-bold text-center text-2xl">My Recent Works</h2>
      <div className="xtab:flex flex-col grid tablet:grid-cols-2 w-full">
      {works.map((work: any, index: number)=>(
        <Work work={work} key={index} no={index} />
      ))}
      </div>
      <div className="flex items-center justify-center mt-4">
        <p onClick={()=> setAllShown(true)} className="flex cursor-pointer items-center text-white px-3 py-1 bg-blue-800 hover:bg-blue-700 duration-300">Show All Works 
        <p className='text-2xl ml-2'>&rarr;</p></p>
      </div>
      {allShown && <WorkSlider works={works} />}
    </div>
  )
}

export default Projects

const textVariant = {
  before: {opacity: 0, x: -40, transition: {duration: 3}},
  after: {opacity: 1, x: 0}
}

const imgVariant = {
  before: {opacity: 0, x: 40, transition: {duration: 3}},
  after: {opacity: 1, x: 0}
}


const Work = ({no, work}: any) => {
  const control: AnimationControls = useAnimation()
  const [proref, inView] = useInView()
  const [imgVar, setImgVar] = useState<any>(imgVariant)
  const [textVar, setTextVar] = useState<any>(textVariant)

  useEffect(()=>{
    if(inView){
      control.start("after");
      console.log("pro")
  }
  }, [control, inView])


  return(
    <div
     className={` flex flex-col xtab:flex-row border-[1px]
      border-slate-200 shadow-md items-center p-[4%] gap-x-8 justify-center mt-[10vh] w-[80%] mx-auto ${no%2===0&&'xtab:flex-row-reverse'}`}>
      <motion.div
        ref={proref}
        variants={no%2===0?imgVar:textVar}
        animate={control}
        initial="before"
       className="xtab:w-[40%] overflow-hidden">
        <img src={work.image} alt="" />
      </motion.div>
      <motion.div
        ref={proref}
        variants={no%2===0?textVar:imgVar}
        animate={control}
        initial="before"
         className="flex items-center xtab:items-start mt-2 xtab:mt-0 xtab:w-[50%] flex-col">
        <h2 className='tablet:text-2xl text-xl font-bold'>{work.title}</h2>
        <p className='tablet:text-lg'>{work.description}</p>
        <a href={work.link} target="_blank" rel='noreferrer' 
         className="flex mx-auto xtab:mx-0 items-center w-[160px] mt-4 xtab:mt-[4vh] text-white px-3 py-1 bg-blue-800
         justify-center hover:bg-blue-700 duration-300">Visit Now
        <p className='text-2xl flex items-center ml-2 my-auto'>&rarr;</p>
        </a>
      </motion.div>
    </div>
  )
}
