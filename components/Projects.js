import Link from "next/link";
import { nanoid } from "nanoid";
import Image from "next/image";
import Card from "./Card";
import tenzieScreenShot from "../public/images/tenzies-screenshot.png"

export default function Projects() {
  const projs = [
    {
      screenShot: "../public/images/tenzies-screenshot.png",
      title: "Tenzies",
      description: "This is tenzies",
      url: "/projects/tenzies"
    },

  ];
  const projElements = projs.map((proj) => {
    return (
      <div 
        key={nanoid()} 
        className="flex-none my-3 mr-8 w-2/3 rounded-lg bg-white shadow-lg">
        <Link 
          className="h-2/3"
          href={proj.url}>
          <Image 
            src={proj.screenShot} 
            alt="tenzies"
            className="object-cover" />
        </Link>
        <div>
          <h1>{proj.title}</h1>
          <p>{proj.description}</p>
        </div>
      </div>
    );
  });
  return (
    <div className="border border-blue-600 min-h-screen">
      <div className="grid grid-cols-2 gap-5 m-5">
        <Link
          href="/projects/travel-journal"
          className="bg-zinc-200 hover:cursor-pointer h-8 drop-shadow-md rounded-lg flex justify-center items-center">
          Travel Journal
        </Link>
        <Link
          href="/projects/meme-generator"
          className="bg-zinc-200 hover:cursor-pointer h-8 drop-shadow-md rounded-lg flex justify-center items-center">
          Meme Generator
        </Link>
        <Link
          href="/projects/tenzies"
          className="bg-zinc-200 hover:cursor-pointer h-8 drop-shadow-md rounded-lg flex justify-center items-center">
          Tenzies
        </Link>
        <Link
          href="/projects/quizzical"
          className="bg-zinc-200 hover:cursor-pointer h-8 drop-shadow-md rounded-lg flex justify-center items-center">
          Quizzical
        </Link>
      </div>
      <div className="flex flex-nowrap overflow-x-scroll items-start mb-8">
        {/*projElements*/}
        <Card content={projs[0]} />
      </div>
      <div>
      </div>
    </div>
  );
}