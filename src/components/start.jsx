import React, { useEffect, useState } from "react";
import Button from "./button";


function start() {
  var [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;

      let deltaX = x - window.innerWidth / 2;
      let deltaY = y - window.innerHeight / 2;

      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

      setRotate(angle - 180);
    });
  });
  return (
    <div data-scroll-section  className="w-screen h-[120vh]  overflow-hidden">
      <div  data-scroll data-scroll-speed="-0.7"  className="w-screen h-[120vh] bg-[#CDEA68] flex items-center justify-center flex-col  ">
      <h1 className=" text-[12vw] tracking-tighter uppercase text-black font-bold ">
        Ready
      </h1>
      <h1 className=" text-[12vw] tracking-tighter uppercase text-black font-bold leading-10 m-5 ">
        to start
      </h1>
      <h1 className=" text-[12vw] tracking-tighter uppercase text-black font-bold ">
        The project?
      </h1>
      <div className=" eyes flex gap-11 absolute">
        <div className="w-[14vw] h-[14vw] bg-zinc-50 rounded-full flex justify-center items-center ">
          <div className="w-2/3 h-2/3 rounded-full bg-black  relative ">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className=" line ease-linear w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
            >
              <div className="w-6 h-6 bg-zinc-50 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-[14vw] h-[14vw] bg-zinc-50 rounded-full flex justify-center items-center  ">
          <div className="w-2/3 h-2/3 rounded-full bg-black  relative ">
            <div
              style={{
                transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              }}
              className="line w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] "
            >
              <div className="w-6 h-6 bg-zinc-50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <Button value = "START THE PROJECT " />
      </div>
    </div>
  );
}

export default start;
