import React from 'react'

function cards() {
  return (
    <div data-scroll-section  className="w-screen h-[90vh] overflow-hidden ">
    <div data-scroll data-scroll-speed="-0.6"  className='w-screen h-[90vh] pt-6 px-20 bg-white flex gap-6  '>
        <div className="card1 w-[46vw] h-[55vh] bg-[#004D43] rounded-xl flex justify-center items-center  relative">
            <h1 className='text-8xl tracking-tighter -mt-10 text-[#CDEA68] font-bold'>ochi</h1>
            <p className='absolute bottom-6 left-6 border-[#CDEA68] text-[#CDEA68] border-2 px-2 py-1 rounded-3xl '>©️2019-2022</p>
        </div>
        <div className="card2 w-[25vw] h-[55vh] bg-[#212121] rounded-xl flex justify-center items-center  relative">
            <img src="\images\logo002.svg" alt="" className='scale-125 -mt-10' />
            <button className='absolute capitalize bottom-6 left-6 border-[zinc-300] text-[zinc-300] border-2 px-2 py-1 rounded-3xl '> Rating 5.0 on clutch </button>
        </div>
        <div className="card2 w-[23vw] h-[55vh] bg-[#212121] rounded-xl flex justify-center items-center  relative">
            <img src="\images\logo003.png" alt="" className='scale-75 -mt-10' />
            <button className='absolute capitalize bottom-6 left-6 border-[zinc-300] text-[zinc-300] border-2 px-2 py-1 rounded-3xl '>bussiness bootcamp almuni</button>
        </div>
    </div>

    </div>
  )
}

export default cards