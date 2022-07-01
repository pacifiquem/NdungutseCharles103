import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const boxVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, x: 0},
}
const Card = ({ability}: any) => {
    const [animate, setAnimate] = useState(false);
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start('visible')
            console.log('in viewBox')
            setAnimate(true)
        }
    }, [control, inView])
  return (
      <motion.div
        ref={ref}
        className="card w-1/2 mx-auto min-w-[300px] h-full flex p-2 flex-col  mt-[5px] border-[1px] shadow-lg "
        variants={boxVariant}
        initial="hidden"
        animate={control}
        >   
        <div className="aspect-square">
            <div className="w-full h-[24vh] overflow-hidden">
            
                <img className='min-h-full min-w-full object-fill' src={ability.image} alt="" />
            </div>
            <div className="flex w-full flex-col">
                <h2 className='text-xl my-2 font-semibold text-center'>{ability.title}</h2>
                <p>{ability.description}</p>
            </div>
        </div>
        </motion.div>
  )
}

export default Card