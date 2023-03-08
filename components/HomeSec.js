import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, AiOutlineFileText } from "react-icons/ai";

export default function HomeSec() {
  return (
    <div className="bg-stone-100 min-h-screen flex justify-center items-center">
      <div className="border border-teal-500 relative mx-40 text-center">
        <h1 className="text-6xl font-black uppercase">Hi, I am Linfeng Xu</h1>
        <p className="text-xl text-gray-700 mt-4 mb-8">A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        <button className="px-10 py-3 bg-amber-400 text-2xl rounded-md drop-shadow-xl hover:bg-amber-500">Projects</button>
      </div>
      <div className="drop-shadow-xl rounded-sm absolute right-1 bg-neutral-100 px-4">
        <div className="my-4"><AiOutlineGithub size={34} /></div>
        <div className="my-4"><AiOutlineLinkedin size={34} /></div>
        <div className="my-4"><AiOutlineMail size={34} /></div>
        <div className="my-4"><AiOutlineFileText size={34} /></div>
      </div>
    </div>
  );
}