import React, { useEffect, useState } from 'react'

function Eyes() {

    var [rotate,setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove",(e) => { 
            let x = e.clientX;
            let y = e.clientY;

            let deltaX = x - window.innerWidth/2;
            let deltaY = y - window.innerHeight/2;

            let angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);

            setRotate(angle-180);
        })
    })
    
    return (
    <div data-scroll-section  className=' w-screen h-screen overflow-hidden max-sm:h-[30vh]'> 
    
        <div data-scroll data-scroll-speed="-0.9"
         className="w-full h-full relative bg-cover   bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] flex justify-center items-center  max-sm:scale-125">
            <div data-scroll data-scroll-speed="0.2" className=" flex gap-11 max-sm:gap-6">
                <div className="w-[14vw] h-[14vw] bg-zinc-50 rounded-full flex justify-center items-center max-sm:w-[25vw] max-sm:h-[25vw] ">
                <div className="w-2/3 h-2/3 rounded-full bg-black  relative max-sm:w-[15vw] max-sm:h-[15vw] ">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className=" line ease-linear w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                        <div className="w-6 h-6 bg-zinc-50 rounded-full max-sm:w-[3.5vw] max-sm:h-[3.5vw]"></div>
                        </div>
                        <p className=" absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  text-lg max-sm:text-[2.5vw]">
                            PLay
                        </p>
                    </div>
                </div>
                <div className="w-[14vw] h-[14vw] bg-zinc-50 rounded-full flex justify-center items-center max-sm:w-[25vw] max-sm:h-[25vw]   ">
                    <div className="w-2/3 h-2/3 rounded-full bg-black  relative max-sm:w-[15vw] max-sm:h-[15vw]">
                        <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-6 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
                        <div className="w-6 h-6 bg-zinc-50 rounded-full max-sm:w-[3.5vw] max-sm:h-[3.5vw]"></div>
                        </div>
                        <p className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  text-lg max-sm:text-[2.5vw]">
                            PLay
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes