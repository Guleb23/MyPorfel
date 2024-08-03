import React from 'react'
import { motion } from 'framer-motion';


export default function Technologies(icons) {
    const animeDuration = [2.5, 3, 5, 2, 6, 2.5, 3, 5, 2, 6];
    const iconVarioant = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"

            },
        }
    })
    console.log(icons);
    return (
        <div className='py-7 border-b border-neutral-800'>
            <p className=' mb-5 text-white text-2xl font-bold'>Technologies:</p>
            <div className='flex flex-wrap justify-center gap-4'>
                {icons.icons.map((icon, index) => (
                    <motion.div
                        variants={iconVarioant(animeDuration[index])}
                        initial="initial"
                        animate="animate"
                        key={index} className='rounded-2xl border-4 border-neutral-800 p-4'>
                        <img src={icon.name} width={60} />
                    </motion.div>
                ))}

            </div>
        </div>
    )
}
