import React from 'react'

function button2(props) {
  return (
    <button className="px-3 py-1 rounded-3xl   border-black border-[1px] text-black flex items-center gap-5  hover:bg-black
    hover:border-white hover:text-white ease-linear  duration-300">
      {props.value}

      
    </button>
  )
}

export default button2