import React from 'react'
import Card from '../components/Card'
import { Abilities } from '../contexts/data'

const Fields = () => {

  return (
    <div className='w-full mt-6 justify-center flex flex-col'>
        <h1 className='text-2xl text-center font-semibold'>Fields</h1>
        <div className="grid gap-5 desktop:grid-cols-4 items-center justify-center tablet:grid-cols-2
         desktop:max-w-full tablet:max-w-[700px] mx-auto mt-6 desktop:w-full px-[2%]">
            {Abilities.map((ability: any, index) => {
            return <Card key={index} ability={ability} />
            })}
        </div>
    </div>
  )
}

export default Fields