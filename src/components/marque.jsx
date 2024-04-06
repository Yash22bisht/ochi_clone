import { motion } from 'framer-motion'
import React from 'react'
motion

function marque() {
  return (
    <div data-scroll data-scroll-speed="-0.01" data-scroll-section    
     className='w-full py-20 bg-[#174640] rounded-tr-3xl rounded-tl-3xl '>
        <div className="text flex text-[17vw] uppercase font-semibold whitespace-nowrap tracking-tighter border-y-[1px] border-[#498079] leading-none overflow-hidden max-sm:text-[25vw] ">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:9}} className='-mt-[2.5vw]   mr-10  max-sm:-mt-[0.5vw] '>we are ochi </motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat:Infinity,duration:9}} className='-mt-[2.5vw]   mr-10  max-sm:-mt-[0.5vw] '>we are ochi  </motion.h1>
        </div>
    </div>
  )
}9
export default marque