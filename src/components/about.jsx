import React from "react";
import Button from "./button";

function about() {
  return (
    <div data-scroll data-scroll-speed="-0.04"
      className="w-full pt-20 pb-8 px-0  bg-[#CCE968] text-black rounded-tr-3xl rounded-tl-3xl ">
      <h1 className=" px-20 text-[3.6vw] font-[400] tracking-tighter leading-[4vw]">
        Ochi is a strategic partner for fast-grow­ing tech <br />
        businesses that need to raise funds, sell prod­ucts,
        <br /> ex­plain com­plex ideas, and hire great peo­ple.
      </h1>
      <div className="second border-t-[1px] mt-12 border-zinc-700 ">
        <div className="flex">
          <div className="px-20 py-4 w-1/2 space-y-4">
            <h1 className="text-[3.6vw] font-[400] tracking-tighter leading-[4vw]">
              Our approach :
            </h1>
            <Button value="Read More" />
          </div>
          <div className="w-1/2 py-4 h-[70vh] object-cover pr-20  ">
            <img
              src="\images\Homepage-Photo-663x469.jpg"
              alt=""
              className="h-full w-full rounded-xl "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default about;
