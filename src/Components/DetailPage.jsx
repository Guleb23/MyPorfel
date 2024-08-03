import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ImageSlider from './ImageSlider';
import Technologies from './Technologies';
import { motion } from 'framer-motion';


function DetailPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const images = location.state.images;
    const title = location.state.name;
    const description = location.state.description;
    const icons = location.state.icons;
    console.log(location.state.githubLink[0]);
    return (
        <div className='w-full h-[43.5rem] overflow-hidden my-10  flex flex-col  justify-start '>
            <motion.h3 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }} className='text-white text-2xl font-bold tracking-tight lg:text-6xl mb-5'>{title}</motion.h3>
            <div className='flex flex-col xl:flex-row gap-10'>
                <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.5 }} className='relative my-5 overflow-hidden lg:overflow-auto h-full' style={{ flex: "0 0 65%" }}>
                    <ImageSlider images={images} />
                </motion.div>
                <div className='font-montserrat text-lg leading-8
                             text-slate-gray mt-2 max-w-none '>
                    <motion.p initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} className='text-white text-2xl font-bold'>Description:</motion.p>
                    <motion.span initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }}>
                        {description}
                    </motion.span>
                    <motion.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.2, duration: 0.5 }}>
                        <Technologies icons={icons} />

                    </motion.div>
                </div>

            </div>





        </div>
    )
}

export default DetailPage