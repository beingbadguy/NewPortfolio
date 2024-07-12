import React from "react";
import Skills from "./Skills";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GiWireframeGlobe } from "react-icons/gi";

const Project = ({
  name = "demo",
  title = "demo title will be here",
  imgUrl = "./slay.png",
  codeUrl,
  webUrl,
}) => {
  return (
    <div className="flex flex-col w-[300px]  p-2 rounded-t-xl w-[99%] md:w-[46%] ">
      <div className="flex items-center justify-center bg-yellow-300 rounded-t-xl">
        <img src={imgUrl} alt="" className="h-{100px} w-[300px] p-2" />
      </div>
      <div className="border-neutral-600  border rounded-b-xl p-2 text-sm">
        <p>{name}</p>
        <p className="">{title}</p>
        <div className="flex flex-wrap mt-2 gap-2">
          <Skills skill={"ReactJs"} color="bg-gray-700" text="white" />
          <Skills skill={"React-router-dom"} color="bg-gray-700" text="white" />
          <Skills skill={"Rapid-API"} color="bg-gray-700" text="white" />
          <Skills skill={"TailwindCSS"} color="bg-gray-700" text="white" />
        </div>
        <div className="  text-white flex items-center  justify-start gap-2 mt-5  mb-2  text-sm">
          <div className="flex items-center p-2 gap-2 border rounded-2xl">
            <GiWireframeGlobe />
            <a href={webUrl}>Website</a>
          </div>
          <div className="flex items-center p-2  gap-2  border rounded-2xl">
            <IoCodeSlashOutline />
            <a href={codeUrl}>Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
