import React from "react";
import WebsiteMonitor from "../../assets/img/WebsiteMonitor.png";
import F from "../../assets/img/F.png";

import { BiRightArrow } from "react-icons/bi";

const Fivething = () => {
  return (
    <div className="h-full container mx-auto py-10 md:py-20 flex flex-col items-center lg:flex-row lg:py-0">
      <div className="flex flex-2 flex-col mx-3 py-5 space-y-4 md:mx-10 md:py-10 lg:flex-1 lg:justify-center lg:mx-auto lg:ml-28 xl:mx-10 ">
        <h1 className=" font-righteous text-pallete-fb8 text-3xl tracking-widest md:text-5xl">
          FIVETHING
        </h1>
        <p className="leading-relaxed md:text-2xl">
          Our very own start-up website portfolio that provides services for the
          clients desired web design and development
        </p>
        <button className="flex flex-row items-center space-x-1 hover:text-pallete-fb8 md:text-xl">
          <p>View Project</p> <BiRightArrow />
        </button>
      </div>

      <div className="relative flex-1 flex items-center justify-center">
        <div className="flex items-center justify-center h-4/5 w-4/5">
          <div className="flex items-end justify-center">
            <img src={F} alt="F" className="h-full lg:h-auto" />
            <img
              src={WebsiteMonitor}
              alt="Website Monitor"
              className="absolute"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fivething;
