import Link from "next/link";
import { nanoid } from "nanoid";
import ProjectItem from "./ProjectItem";
import tenzieScreenShot from "../public/images/tenzies-screenshot.png";
import memeScreenShot from "../public/images/meme-generator-screenshot.png";
import travelScreenShot from "../public/images/travel-journal-screenshot.png";
import quizScreenShot from "../public/images/quizzical-screenshot.png";
import gamesScreenShot from "../public/images/games-screenshot.png";
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
      title: "Travel Journal",
      description: "This is travel journal",
      url: "/projects/travel-journal"
    },
    {
      screenShot: quizScreenShot,
      title: "Quizzical",
      description: "This is quizzical",
      url: "/projects/quizzical"
    },
    {
      screenShot: gamesScreenShot,
      title: "Games",
      description: "Some poker games",
      url: "/projects/games"
    }
  ];

  const projElements = projs.map((proj) => {
    return (
      <ProjectItem content={proj} key={nanoid()} />
    );
  });

  return (
    <div className="p-8 md:p-16 min-h-screen">
      <h1 className="text-center text-5xl font-bold py-2 text-neutral-700 text-shadow shadow-gray-500">Some Things I&apos;ve Built</h1>
      <div className="grid lg:grid-cols-2 gap-10 m-10">
        {projElements}
      </div>
    </div>
  );
}