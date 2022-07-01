import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const boxVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, x: 200},
}
const Card = () => {
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
        className="card mt-[500px] bg-yellow-500 w-[200px] h-[200px]"
        variants={boxVariant}
        initial="hidden"
        animate={control}
        >
            <h1 className='my-auto mx-auto'>COntent</h1>
        </motion.div>
  )
}

export default Card