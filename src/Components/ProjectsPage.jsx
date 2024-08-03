import ProjectCard from './ProjectCard'
import { worksInProtfel } from '../Data/constants'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';


export default function ProjectsPage() {
    console.log(worksInProtfel);
    return (
        <div className='relative flex flex-wrap flex-col justify-center gap-6 lg:flex-row ' >
            {worksInProtfel.map((work, index) => (
                <motion.div key={index} className='lg:w-1/3 rounded-xl bg-slate-800 h-full' initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index - (index / 4) }}>
                    <ProjectCard  {...work} />
                </motion.div>

            ))}
        </div>
    )
}


