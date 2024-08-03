import React from 'react'
import { aboutMeFirst, aboutMeSecond } from '../Data/constants'
import me from '../assets/Images/my.jpg'
import { motion } from "framer-motion"


export default function HomePage() {
    const container = (delay) => ({
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: delay
            }
        }
    })
    return (
        <div className='box-border pb-4 lg:h-[calc((100vh-13.5rem))] mb-[39px] lg:mb-35'>
            <div className='flex flex-wrap items-center'>
                <div className='w-full lg:w-1/2 '>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Gleb Khlopotow</motion.h1>
                        <motion.span
                            variants={container(0.7)}
                            initial="hidden"
                            animate="visible"
                            className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>FullStack-developer</motion.span>
                        <motion.p
                            variants={container(0.9)}
                            initial="hidden"
                            animate="visible"
                            className='my-2 max-w-xl py-6 tracking-tighter font-montserrat text-lg leading-8
                             text-slate-gray mt-2'>{aboutMeFirst}</motion.p>
                        <motion.p
                            variants={container(1.1)}
                            initial="hidden"
                            animate="visible"
                            className='max-w-xl tracking-tighter font-montserrat text-lg leading-8
                             text-slate-gray mt-2'>{aboutMeSecond}</motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                    <div className='flex justify-center  '>
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.3, duration: 0.5 }}
                            className='object-contain object-center rounded-xl' width={600} height={600} src={me} alt='me' />
                    </div>
                </div>

            </div>
        </div>

    )
}
