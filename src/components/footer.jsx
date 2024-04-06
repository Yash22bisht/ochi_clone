import React from "react";

function footer() {
  return (
    <div data-scroll data-scroll-speed="0.1" className="w-full px-20 pt-20 pb-10  flex max-sm:px-5 ">
      <div className="w-1/2 flex justify-between flex-col">
        <h1 className=" text-[6.5vw] uppercase tracking-tighter leading-none font-semibold  ">
          eyes- <br /> opening{" "}
        </h1>
        <h1 className=" text-[2.5vw]  font-semibold ">ochi</h1>
      </div>
      <div className="w-1/2 flex gap-16 flex-col">
        <h1 className=" text-[6.5vw] uppercase tracking-tighter leading-none font-semibold  ">
          PRESENTATION
        </h1>
        <h1 className=" text-lg ">
          S:
          <div className="flex flex-col mt-5  gap-2">
            {["instagram", "behance ", "twitter", "linkedin"].map(
              (item, index) => (
                <a
                  href=""
                  key={index}
                  className=" underline capitalize font-light"
                >
                  {item}
                </a>
              )
            )}
          </div>
        </h1>
        <h1 className=" text-lg ">
          L:
          <div className="flex flex-col mt-5  gap-2">
            {[
              "202-1965 W 4th AveVancouver, Canada",

              "30 Chukarina StLviv, Ukraine",
            ].map((item, index) => (
              <a
                href=""
                key={index}
                className=" underline capitalize font-light"
              >
                {item}
              </a>
            ))}
          </div>
        </h1>
        <h1 className=" text-lg ">
          E:
          <div className="flex flex-col mt-5  gap-2">
            {["hello@ochi.design"].map((item, index) => (
              <a
                href=""
                key={index}
                className=" underline capitalize font-light"
              >
                {item}
              </a>
            ))}
          </div>
        </h1>
        <div className="flex justify-between">
          <h1 className=" text-zinc-600 ">© ochi design 2024. Legal Terms</h1>
          <h1 className=" text-zinc-600 ">Website by Obys</h1>
        </div>
      </div>
    </div>
  );
}

export default footer;
