import React from "react";
import { motion } from "framer-motion";

function hamburger(props) {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={props.clicked ? { y: "0%" } : { y: "-100%" }}
      transition={{ease:"linear" ,duration:0.35}}
      className="absolute z-20 w-screen  bg-zinc-800  pt-1 pb-[5vh]  "
    >
      <div className=" mt-[20vh]  border-zinc-500 border-t-[0.5px]  py-[2vh]">
        <h1 className="flex flex-col px-8 gap-5  capitalize font-bold tracking-tighter text-6xl ">
          {["service", "ourwork", "About us ", "insight", "contact us"].map(
            (item, index) => (
              <div className=" space-y-2">
                <a href="#" key={index} className="border-b-2 ">
                  {item}
                </a>
                
              </div>
            )
          )}
        </h1>
      </div>
    </motion.div>
  );
}

export default hamburger;
