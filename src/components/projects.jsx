import React, { useState } from 'react'

function projects(props) {
  var [anime , setanime] = useState(false);
  return (
    <div className="w-[45vw] h-[78vh] ">
            <div  className="  w-full h-full hover:scale-[0.95] ease-linear duration-500  object-cover rounded-xl overflow-hidden">
              <img
                src={props.value} 
                alt=""
                className="w-full h-full rounded-xl hover:scale-[1.1] ease-linear duration-500"
              />
              
            </div>
          </div>
  )
}

export default projects