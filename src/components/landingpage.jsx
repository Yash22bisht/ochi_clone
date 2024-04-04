import { motion } from "framer-motion";
import React from "react";
function Landingpage() {
  return (
    <div data-scroll data-scroll-speed="-0.5"    
    className="w-screen h-screen bg-zinc-900 pt-1 px-14">
      <div className="textstructure mt-40  ">
        {["we create", "eye opening ", "presentations "].map((item, index) => (
          <div
            key={index}
            className=" masker uppercase text-[6.75vw] leading-[6.25vw] tracking-tighter font-semibold "
          >
            <div className="flex items-end ">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.7, 0, 0.84, 0], duration:1 }}
                  className="w-[9vw] h-[5.5vw] mr-2 object-cover"
                >
                  <img
                    src="\images\content-image01.jpg"
                    alt=""
                    className="w-full h-full rounded-l"
                  />
                </motion.div>
              )}
              <h1>{item} </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32"></div>
      <div className="lowerpart flex justify-between items-center pt-4 ">
        {["for public and private companies ", "from first pitch to IPO "].map(
          (item, index) => (
            <div className="capitalize">
              <h3>{item} </h3>
            </div>
          )
        )}
        <button className="border-white border-[1px] uppercase rounded-3xl px-4 py-1 ">
          Start the project{" "}
        </button>
      </div>
    </div>
  );
}

export default Landingpage;
