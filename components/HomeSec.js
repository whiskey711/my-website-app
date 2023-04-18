import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineSolution, AiOutlineMail } from "react-icons/ai";
import Router from "next/router";

export default function HomeSec() {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="mx-40 flex flex-col justify-center items-center">
        <p className="bg-gray-300 px-2 uppercase">Let's build something together</p>
        <h1 className="text-6xl font-black my-4">
          Hi, I am <span className="text-sky-400">Linfeng Xu</span>
        </h1>
        <p className="text-xl text-gray-700 mt-4 mb-8 text-center">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
      </div>
      <div className="p-4 space-x-5 flex">
        <div className="rounded-full p-5 shadow-lg cursor-pointer hover:scale-110 hover:bg-sky-200 duration-300">
          <a 
            href="https://github.com/whiskey711" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Github">
            <AiOutlineGithub size={22} />
          </a>
        </div>
        <div className="rounded-full p-5 shadow-lg cursor-pointer hover:scale-110 hover:bg-sky-200 duration-300">
          <a 
            href="https://www.linkedin.com/in/linfeng-xu-98b51a126/"
            target="_blank" 
            rel="noopener noreferrer"
            title="LinkedIn">
            <AiOutlineLinkedin size={22} />
          </a>
        </div>
        <div className="rounded-full p-5 shadow-lg cursor-pointer hover:scale-110 hover:bg-sky-200 duration-300">
          <a 
            href="mailto:james2012.shun@gmail.com"
            title="Email">
            <AiOutlineMail size={22} />
          </a>
        </div>
        <div className="rounded-full p-5 shadow-lg cursor-pointer hover:scale-110 hover:bg-sky-200 duration-300">
          <a 
            href="myResume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            title="Resume">
            <AiOutlineSolution size={22} />
          </a>
        </div>
      </div>
    </div>
  );
}