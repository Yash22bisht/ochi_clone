import { motion } from "framer-motion";
import React, { useState, useEffect }from "react";
function Landingpage() {
  var[width , setWidth] = useState()
  useEffect(() => {
    
    var newWidth = window.innerWidth < 640 ? "18vw" : "9vw";
    setWidth(newWidth);
  }, []);
  return (
    <div data-scroll data-scroll-speed="-0.5"    
    className="w-screen h-screen  bg-zinc-900  pt-1 px-14 max-sm:px-5">
      <div className="textstructure mt-40  ">
        {["we create", "eye opening ", "presentations "].map((item, index) => (
          <div
            key={index}
            className=" masker uppercase text-[6.75vw] leading-[6.25vw] tracking-tighter font-semibold max-sm:text-[12vw] leading-none  "
          >
            <div className="flex items-center   ">
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: width  }}
                  transition={{ ease: [0.7, 0, 0.84, 0], duration:1 }}
                  className="w-[9vw] h-[5.5vw] mr-2 object-cover max-sm:h-auto  "
                >
                  <img
                    src="\images\content-image01.jpg"
                    alt=""
                    className="w-full h-full rounded-l "
                  />
                </motion.div>
              )}
              <h1>{item} </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32"></div>
      <div className="lowerpart flex justify-between items-center pt-4  max-sm:text-[4vw] max-sm:block space-y-8 -tracking-tighter  ">
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
