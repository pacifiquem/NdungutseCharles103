import React from 'react'
import Card from '../components/Card'
import { Abilities } from '../contexts/data'

const Skills = () => {

  return (
    <div className='w-full flex flex-col'>
        <h1 className='text-xl text-center font-semibold'>Skills</h1>
        <div className="grid px-[2%] grid-cols-4 gap-[5%]">
            {Abilities.map((ability: any, index) => {
            return <Card key={index} ability={ability} />
            })}
        </div>
    </div>
  )
}

export default Skills