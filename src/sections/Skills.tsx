import { skills } from '../contexts/data'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'
import { BiChevronDownCircle, BiChevronUpCircle } from 'react-icons/bi'
import { useApp } from '../contexts/AppContext'

const skillVariant = {
    before: { x: -700},
    after: { x: 0, transition: { duration: 0.5 } },
}

const Skills = () => {
    const [ref, inView] = useInView()
    const [skilldata, setSkilldata] = useState<any>([])
    const [expanded, setExpanded] = useState(false)
    const { themeClass } =  useApp()
    const control1 = useAnimation()

    useEffect(() => {
        if (inView) {
            control1.start('after')
            console.log('in view')
        }
    }, [control1, inView, expanded])

    const handleExpand = () => {
        if(expanded) {
            setSkilldata(skills.slice(0, 8))
            control1.start('after')
            setExpanded(false)
        }
        else {
            control1.start('after')
            setSkilldata(skills)
            setExpanded(true)
        }
    }

    useEffect(() => {
        setSkilldata(skills.slice(0, 8))
    }, [])

  return (
    <div id='skills' className={` bg-gradient-to-b ${themeClass.bg1} py-4 w-full fllex flex-col`}
        ref={ref}>
        <h1 className='text-2xl font-semibold text-center'>Skills</h1>
        <div className="grid max-w-[1200px] mx-auto gap-x-11 mt-6 grid-cols-2 gap-4 px-4">
        { skilldata.map((skill: object, index: any)=>(
            <Skill skill={skill} key={index} data={{ref, inView, control1}} />
        )) }
        </div>
        <div className="flex w-full">
            <button onClick={handleExpand} 
            className='mt-5 flex items-center bg-blue-600 text-white rounded-3xl px-3 py-1 mx-auto'
            >{expanded?'Show less':'Show more'}
            {expanded?<BiChevronUpCircle className='ml-3' />:(
                 <BiChevronDownCircle className='ml-3' />)}</button>
        </div>
    </div>
  )
}

export default Skills

const Skill = ({skill, data}: any) => {
    const { ref, control1 } = data

    return (
        <div className='flex flex-col '>
            <div className="flex items-center justify-between">
                <h1 className='font-semibold'>{skill.name}</h1>
                <h1 className='font-semibold'>{skill.value}</h1>
            </div>
            <div className="flex bg-slate-200 h-3 mt-2 overflow-hidden">
                <motion.div
                 variants={skillVariant}
                 initial="before"
                 animate={control1}
                 style={{width: skill.value}}
                 className={`${skill.color} h-full`}>
                </motion.div>
            </div>
        </div>
    )
    }
