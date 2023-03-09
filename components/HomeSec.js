import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineFileText, AiOutlineWechat } from "react-icons/ai";
//import myResume from "../public/myResume.pdf";

export default function HomeSec() {
  return (
    <div className="bg-stone-100 min-h-screen flex justify-center items-center">
      <div className="border border-teal-500 relative mx-40 text-center">
        <h1 className="text-6xl font-black uppercase">Hi, I am Linfeng Xu</h1>
        <p className="text-xl text-gray-700 mt-4 mb-8">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <button className="px-10 py-3 bg-amber-400 text-2xl rounded-md drop-shadow-xl hover:bg-amber-500 hover:scale-110 transition">Projects</button>
      </div>
      <div className="drop-shadow-xl rounded-sm absolute right-1 bg-neutral-100 p-2 space-y-2">
        <div className="rounded-sm p-2 hover:scale-110 hover:bg-yellow-200 transition">
          <a 
            href="https://github.com/whiskey711" 
            target="_blank" 
            rel="noopener noreferrer"
            title="Github">
            <AiOutlineGithub size={34} />
          </a>
        </div>
        <div className="rounded-sm p-2 hover:scale-110 hover:bg-yellow-200 transition">
          <a 
            href="https://www.linkedin.com/in/linfeng-xu-98b51a126/"
            target="_blank" 
            rel="noopener noreferrer"
            title="LinkedIn">
            <AiOutlineLinkedin size={34} />
          </a>
        </div>
        <div className="rounded-sm p-2 hover:scale-110 hover:bg-yellow-200 transition">
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            title="WeChat">
            <AiOutlineWechat size={34} />
          </a>
        </div>
        <div className="rounded-sm p-2 hover:scale-110 hover:bg-yellow-200 transition">
          <a 
            href="myResume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            title="Resume">
            <AiOutlineFileText size={34} />
          </a>
        </div>
      </div>
    </div>
  );
}