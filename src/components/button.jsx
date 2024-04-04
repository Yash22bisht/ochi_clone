import { motion } from "framer-motion";
import React, { useState } from "react";

function button(props) {
  var [isHover , setHover] = useState(false)
  return (
    <button onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className="px-6 py-4 rounded-3xl text-md bg-black text-white flex items-center gap-5  relative">
      {props.value}
      <motion.div initial={{scale:0.35}} animate={isHover ? {scale:1} :{scale:0.35}} className="w-6 h-6  bg-white rounded-full object-cover p-1  scale-[0.35] ">
      <motion.img initial={{opacity:0}} animate={isHover ? {opacity:1} : {opacity:0}} src="/images/image.png" alt="" className=" h-full w-full  opacity-0" />
      </motion.div>
    </button>
  );
}

export default button;
