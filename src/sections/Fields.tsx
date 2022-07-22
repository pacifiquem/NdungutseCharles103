import React from 'react'
import Card from '../components/Card'
import { useApp } from '../contexts/AppContext'
import { Abilities } from '../contexts/data'

const Fields = () => {
  const { themeClass } =  useApp()

  return (
    <div className={`w-full ${themeClass.bgAlt1}  pt-[10vh] laptop:pt-6 justify-center flex flex-col`}>
        <h1 className='text-2xl text-center font-semibold'>Fields</h1>
        <div className="grid py-7 gap-1 desktop:grid-cols-4 items-center justify-center tablet:grid-cols-2
         desktop:max-w-[1600px] tablet:max-w-[900px] mx-auto mt-6 desktop:w-full px-[2%]">
            {Abilities.map((ability: any, index) => {
            return <Card key={index} ability={ability} />
            })}
        </div>
    </div>
  )
}

export default Fields