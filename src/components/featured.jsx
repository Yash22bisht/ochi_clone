import React, { useEffect, useState } from "react";
import Button2 from "./button2";
import Button from "./button";
import Projects from "./projects";
import { motion } from "framer-motion";
function feature() {
  var [anime,setanime] = useState([false,false ,false,false]);
  const handleMouseEnter = (index) => {
    let update = [...anime];
    update[index] = true;
    setanime(update);
  };

  const handleMouseLeave = (index) => {
    let update = [...anime];
    update[index] = false;
    setanime(update);
  };

  
  return (
    <div className="w-screen py-28  bg-white max-sm:py-16">
      <h1 className="px-20  pb-12 text-6xl font-normal text-black tracking-tighter border-zinc-400 border-b-[1px] max-sm:px-5 max-sm:text-4xl">
        Featured projects
      </h1>
      <div className="flex gap-6 mt-20 px-20 max-sm:px-5 max-sm:block max-sm:space-y-10 max-sm:mt-12">
        <div className="space-y-3 max-sm:  ">
          <div
            onMouseEnter={() => handleMouseEnter(0)}
            onMouseLeave={() => handleMouseLeave(0)}
            className="w-[45vw] h-[78vh]  relative max-sm:h-[36vh]  "
          >
            <Projects value="\images\Fyde_Illustration_Crypto_2-663x551.png" />
            <div className="    absolute  z-10 top-1/3   left-[100%]  -translate-x-[50%] overflow-hidden ">
              <h1 className="flex text-8xl uppercase text-[#c2dd61] font-semibold tracking-tighter   ">
                {["f", "y", "d", "e"].map((item, index) => (
                  <motion.span
                    initial={{ y: 100 }}
                    animate={anime[0] ? { y: 0 } : { y: 100 }}
                    transition={{ ease: "linear", delay: index * 0.04 }}
                    className="  inline-block  "
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button2 value="AUDIT " />
            <Button2 value="COPYWRITING " />
            <Button2 value="SALES DECK " />
            <Button2 value="SLIDE DESIGN " />
          </div>
        </div>
        <div className="space-y-3 ">
          <div
            onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}
            className="w-[45vw] h-[78vh] relative max-sm:h-[36vh]"
          >
            <Projects value="\images\Vise_front2-663x551.jpg" />
            <div className="    absolute  z-10 top-1/3   right-[100%]  translate-x-[50%] overflow-hidden   ">
              <h1 className="flex text-8xl uppercase text-[#c2dd61] font-semibold tracking-tighter   ">
                {["v","i","s","e"].map((item, index) => (
                  <motion.span
                    initial={{ y: 100 }}
                    animate={anime[1]? { y: 0 } : { y: 100 }}
                    transition={{ ease: "linear", delay: index * 0.04 }}
                    className="  inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>
          </div>
          <div className="flex gap-2">
            <Button2 value="AGENCY " />
            <Button2 value="CAMPANY PRESENTATION " />
          </div>
        </div>
      </div>
      <div className="flex gap-6 mt-20 px-20 max-sm:px-5 max-sm:block max-sm:space-y-10">
        <div className="space-y-3 ">
          <div
            onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}
            className="w-[45vw] h-[78vh] relative max-sm:h-[36vh]"
          >
            <Projects value="\images\Frame-3875-663x551.jpg" />
            <div className="    absolute  z-10 top-1/3   left-[100%]  -translate-x-[50%]  overflow-hidden ">
              <h1 className="flex text-8xl uppercase text-[#c2dd61] font-semibold tracking-tighter   ">
                {"trawa".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: 100 }}
                    animate={anime[2] ? { y: 0 } : { y: 100 }}
                    transition={{ ease: "linear", delay: index * 0.04 }}
                    className="  inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            <Button2 value="BRAND IDENTITY " />
            <Button2 value="DESIGN RESERCH " />
            <Button2 value="INVESTOR DECK  " />
          </div>
        </div>
        <div className="space-y-3 ">
          <div
            onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}
            className="w-[45vw] h-[78vh]  relative max-sm:h-[36vh] "
          >
            <Projects value="\images\PB-Front-4-663x551.png" />
            <div className="    absolute  z-10 top-1/3   right-[100%]  translate-x-[50%] overflow-hidden ">
              <h1 className="flex text-8xl uppercase text-[#c2dd61] font-semibold tracking-tighter   ">
                {"premium blend".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: 100 }}
                    animate={anime[3] ? { y: 0 } : { y: 100 }}
                    transition={{ ease: "linear", delay: index * 0.04 }}
                    className="  inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
            </div>
          </div>
          <div className="flex gap-2">
            <Button2 value="BRAND TEMPLATE " />
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center   ">
        <Button value="VIEW ALL CASE STUDIES  " />
      </div>
    </div>
  );
}

export default feature;
