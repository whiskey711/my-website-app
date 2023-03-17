import Link from "next/link";
import { nanoid } from "nanoid";
import Card from "./Card";
import tenzieScreenShot from "../public/images/tenzies-screenshot.png";
import memeScreenShot from "../public/images/meme-generator-screenshot.png";
import travelScreenShot from "../public/images/travel-journal-screenshot.png";
import quizScreenShot from "../public/images/quizzical-screenshot.png";

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
  const projElements = projs.map((proj) => {
    return (
      <Card content={proj} key={nanoid()} />
    );
  });
  return (
    <div className="border border-blue-600 min-h-screen">
      <div className="flex flex-nowrap overflow-x-auto items-start mb-8">
        {projElements}
      </div>
    </div>
  );
}