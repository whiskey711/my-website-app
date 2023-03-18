import Link from "next/link";
import { nanoid } from "nanoid";
import ProjectItem from "./ProjectItem";
import tenzieScreenShot from "../public/images/tenzies-screenshot.png";
import memeScreenShot from "../public/images/meme-generator-screenshot.png";
import travelScreenShot from "../public/images/travel-journal-screenshot.png";
import quizScreenShot from "../public/images/quizzical-screenshot.png";
import Image from "next/image";

export default function Projects() {
  const projs = [
    {
      screenShot: tenzieScreenShot,
      title: "Tenzies",
      description: "This is tenzies",
      url: "/projects/tenzies"
    },
    {
      screenShot: memeScreenShot,
      title: "Meme Generator",
      description: "This is meme generator",
      url: "/projects/meme-generator"
    },
    {
      screenShot: travelScreenShot,
      title: "Travel journal",
      description: "This is travel journal",
      url: "/projects/travel-journal"
    },
    {
      screenShot: quizScreenShot,
      title: "Quizzical",
      description: "This is quizzical",
      url: "/projects/quizzical"
    }
  ];
  /*
  const projElements = projs.map((proj) => {
    return (
      <ProjectItem content={proj} key={nanoid()} />
    );
  });*/
  return (
    <div className="border border-blue-600 min-h-screen">
      <div className="grid grid-cols-2 gap-5 m-5">
        {/*projElements*/}
        
        <div className="relative flex w-full h-auto justify-center items-center group rounded-lg shadow-xl p-3 bg-stone-200">
          <Image src={tenzieScreenShot} alt="" className="rounded-lg group-hover:opacity-10 transition" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition text-white">
            <h1>Title</h1>
            <p>Description</p>
            <Link href="/">Check</Link>
          </div>
        </div>

      </div>
    </div>
  );
}