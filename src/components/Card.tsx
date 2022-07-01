import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const boxVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, x: 200},
}
const Card = ({ability}: any) => {
    const control = useAnimation()
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            control.start('visible')
        }
    }, [control, inView])
  return (
    <motion.div
        ref={ref}
        className="card flex p-2 flex-col mt-[5px] border-[1px] shadow-lg "
        variants={boxVariant}
        initial="hidden"
        animate={control}
        >
            <img src={ability.image} alt="" />
            <div className="flex w-full flex-col">
                <h2>{ability.title}</h2>
                <p>{ability.description}</p>
            </div>
        </motion.div>
  )
}

export default Card