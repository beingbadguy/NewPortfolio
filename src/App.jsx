import React, { useState } from "react";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Project from "./components/Project";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiLight, CiDark } from "react-icons/ci";
import { motion } from "framer-motion";
const App = () => {
  const [enter, setEnter] = useState(false);
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ y: -2000 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
    >
      {/* upper section  */}
      <div className="flex items-start justify-between  mt-10 w-[95%] md:w-[70%]  p-2">
        <div className="w-[70%] md:w-[100%]">
          <h1 className="text-3xl md:text-5xl font-bold">Hi, I'm Aman 👋</h1>
          <p className="mt-3  text-md ">
            Full Stack Deveoper. I love building things and helping people.
          </p>
        </div>
        <div className="">
          <img
            src="./passport.jpg"
            alt=""
            className="h-[100px] w-[100px]  rounded-[100%]"
          />
        </div>
      </div>

      {/* about section  */}
      <div className="w-[95%] md:w-[70%] mt-4  p-2">
        <p className="font-bold">About</p>
        <p className="mt-2 text-neutral-400  text-sm md:text-md">
          I am pursuing degree in{" "}
          <span className="underline text-white">
            computer science engineering
          </span>{" "}
          from Bhagwati Institute of Technology and Science, Ghaziabad,
        </p>
      </div>

      {/* Education  */}
      <div className="w-[95%] md:w-[70%] mt-4  p-2">
        <p className="font-bold">Education</p>
        <div className="">
          <Education
            imgUrl={"./bits-removebg-preview.png"}
            title="BITS Ghaziabad"
            stream="Computer Science Engineering"
            period="2022 - Appearing"
          />
          <Education
            imgUrl={"./gbpit-removebg-preview.png"}
            title="GB Pant Institute of Technology"
            stream="Computer Science"
            period="2018 - 2021"
          />
          <Education
            imgUrl={"./rsbv-removebg-preview.png"}
            title="RSBV Surajmal Vihar"
            stream="Science, Maths, English"
            period="2013 - 2018"
          />
        </div>
      </div>

      {/* skills Menu  */}

      <div className="w-[95%] md:w-[70%] mt-4  p-2 ">
        <p className="font-bold">Skills</p>
        <div className="flex gap-2 flex-wrap mt-3">
          <Skills skill={"ReactJs"} />
          <Skills skill={"Javascript"} />
          <Skills skill={"C++"} />
          <Skills skill={"HTML"} />
          <Skills skill={"CSS"} />
          <Skills skill={"Nodejs"} />
          <Skills skill={"Python"} />
          <Skills skill={"MongoDB"} />
          <Skills skill={"ExpressJs"} />
          <Skills skill={"TailwindCSS"} />
          <Skills skill={"Bootstrap"} />
          <Skills skill={"Supabase"} />
          <Skills skill={"C"} />
          <Skills skill={"ShadCN"} />
        </div>
      </div>

      {/* projects section  */}
      <div className="flex flex-col items-center mt-10   w-[95%] md:w-[70%]">
        <Skills skill={"My Projects"} />
        <p className="my-3 text-2xl md:text-5xl font-bold text-center">
          Check out my latest work
        </p>
        <p className=" w-[80%] md:w-[70%] text-center font-semibold text-grey-600 text-md md:text-2xl text-neutral-500">
          I've worked on a variety of projects, from simple websites to complex
          web applications. Here are a few of my favorites.
        </p>
        <div className="flex flex-col flex-wrap md:flex-row justify-between items-center mt-5">
          <Project
            name="Slayyyyy"
            title="Our e-commerce platform is a comprehensive online marketplace designed to provide a seamless shopping experience for customers and a powerful sales solution for businesses."
            imgUrl={"./slay.png"}
            webUrl={"https://sassy-ecom.vercel.app/"}
            codeUrl={"https://github.com/beingbadguy/AmanPortfolio"}
          />
          <Project
            name="Notify"
            title="The Notify app is a powerful and intuitive task management tool designed to help users organize their daily activities, boost productivity, and manage their time effectively. "
            imgUrl={"./Notify.png"}
            webUrl={"https://notify-ochre.vercel.app/"}
            codeUrl={"https://github.com/beingbadguy/notify"}
          />
          <Project
            name="JobPedia"
            title="JobPedia is an innovative platform designed to streamline the job search process and provide comprehensive career support for job seekers."
            imgUrl={"./JobPedia.png"}
            webUrl={"https://job-pedia-ochre.vercel.app/"}
            codeUrl={"https://github.com/beingbadguy/JobPedia"}
          />
          <Project
            name="Chat-Bot"
            title="The ChatBot is an intelligent conversational agent designed to assist users with various tasks and provide information in real-time. Built using advanced natural language processing (NLP) techniques, the ChatBot can understand and respond to a wide range of user queries effectively."
            imgUrl={"./bot.png"}
            webUrl={"https://chat-bot-phi-blond.vercel.app/"}
            codeUrl={"https://github.com/beingbadguy/chatBot"}
          />
        </div>
      </div>

      {/* about section  */}
      <div className="flex flex-col items-center mt-10 mb-10  w-[95%] md:w-[70%]">
        <Skills skill={"Contact"} />
        <p className="my-3 text-2xl md:text-5xl font-bold text-center">
          Get in Touch
        </p>
        <p className=" w-[80%] md:w-[70%] text-center font-semibold text-grey-600 text-md md:text-2xl text-neutral-500">
          Want to chat? Just shoot me a dm with a direct question on instagram
          and I'll respond whenever I can. I will ignore all soliciting.
        </p>
      </div>
      <div
        className={`fixed bottom-10 z-[999] bg-white ${
          enter ? "w-[70%] md:w-[50%] " : "w-[50%] md:w-[40%]"
        }   p-4 transition-all duration-500 text-black flex items-center justify-between rounded-2xl text-2xl gap-4 cursor-pointer`}
        onMouseEnter={() => {
          setEnter(true);
        }}
        onMouseLeave={() => {
          setEnter(false);
        }}
      >
        <a href="">
          {" "}
          <FaLinkedin className=" hover:bg-black hover:text-white cursor-pointer transition-all duration-500 rounded-[100%] hover:p-1 " />
        </a>
        <a href="https://github.com/beingbadguy" target="_black">
          <FaGithub className=" hover:bg-black hover:text-white cursor-pointer transition-all duration-500 rounded-[100%] hover:p-1 " />
        </a>
        <a href="https://www.instagram.com/beingbadguy/ " target="_blank">
          <FaInstagram className=" hover:bg-black hover:text-white cursor-pointer transition-all duration-500 rounded-[100%] hover:p-1 " />
        </a>

        {/* <CiDark />
        <CiLight /> */}
      </div>
    </motion.div>
  );
};

export default App;
