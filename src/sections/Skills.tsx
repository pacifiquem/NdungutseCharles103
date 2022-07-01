import { skills } from '../contexts/data'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const skillVariant = {
    before: { x: -700},
    after: { x: 0, transition: { duration: 0.5 } },
}

const Skills = () => {
    const [ref, inView] = useInView()
    const control = useAnimation()

    useEffect(() => {
        if (inView) {
            control.start('after')
            console.log('in view')
        }
    }, [control, inView])

  return (
    <div className=''
    ref={ref}>
        <h1 className='text-2xl text-center'>Skills</h1>
        <div className="grid mt-6 grid-cols-2 gap-4 px-4">
        { skills.map((skill: object, index)=>(
            <Skill skill={skill} key={index} data={{ref, inView, control}} />
        )) }
        </div>
    </div>
  )
}

export default Skills

const Skill = ({skill, data}: any) => {
    const { ref, control } = data

    return (
        <div className='flex flex-col'>
            <h1 className='font-semibold'>{skill.name}</h1>
            <div className="flex bg-slate-200 h-3 mt-2 overflow-hidden">
                <motion.div
                 variants={skillVariant}
                 initial="before"
                 animate={control}
                 className={`w-[${skill.value}] bg-blue-800 h-full`}>
                </motion.div>
            </div>
        </div>
    )
    }
