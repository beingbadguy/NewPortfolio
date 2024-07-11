import React from "react";
import Skills from "./Skills";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GiWireframeGlobe } from "react-icons/gi";

const Project = () => {
  return (
    <div className="flex flex-col w-[300px]  p-2 rounded-t-xl w-[99%] md:w-[46%] ">
      <div className="flex items-center justify-center bg-white rounded-t-xl">
        <img
          src="https://dummyimage.com/300.png/09f/fff"
          alt=""
          className="h-{100px} w-[200px] p-2"
        />
      </div>
      <div className="border-neutral-600  border rounded-b-xl p-2 text-sm">
        <p>Chat Collect</p>
        <p className="">
          With the release of the OpenAI GPT Store, I decided to build a SaaS
          which allows users to collect email addresses from their GPT users.
          This is a great way to build an audience and monetize your GPT API
          usage.
        </p>
        <div className="flex flex-wrap mt-2 gap-2">
          <Skills skill={"Next Js"} color="bg-gray-700" text="white" />
          <Skills skill={"Next Js"} color="bg-gray-700" text="white" />
          <Skills skill={"Next Js"} color="bg-gray-700" text="white" />
          <Skills skill={"Next Js"} color="bg-gray-700" text="white" />
          <Skills skill={"Next Js"} color="bg-gray-700" text="white" />
          <Skills skill={"Next Js"} color="bg-gray-700" text="white" />
          <Skills skill={"Next Js"} color="bg-gray-700" text="white" />
        </div>
        <div className="  text-white flex items-center  justify-start gap-2 mt-5  mb-2  text-sm">
          <div className="flex items-center p-2 gap-2 border rounded-2xl">
            <GiWireframeGlobe />
            <a href="">Website</a>
          </div>
          <div className="flex items-center p-2  gap-2  border rounded-2xl">
            <IoCodeSlashOutline />
            <a href="">Code</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
