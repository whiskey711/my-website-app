import Link from "next/link";

export default function Projects() {
  const projs = [1,2,3];
  const projElements = projs.map((proj) => {
    return (
      <div className="w-2/3 border">
        {proj}
      </div>
    );
  });
  return (
    <div className="border border-blue-600 min-h-screen">
      <div className="grid grid-cols-2 gap-5 m-5">
        <Link
          href="/projects/travel-journal"
          className="bg-zinc-200 hover:cursor-pointer h-32 drop-shadow-md rounded-lg flex justify-center items-center">
          Travel Journal
        </Link>
        <Link
          href="/projects/meme-generator"
          className="bg-zinc-200 hover:cursor-pointer h-32 drop-shadow-md rounded-lg flex justify-center items-center">
          Meme Generator
        </Link>
        <Link
          href="/projects/tenzies"
          className="bg-zinc-200 hover:cursor-pointer h-32 drop-shadow-md rounded-lg flex justify-center items-center">
          Tenzies
        </Link>
        <Link
          href="/projects/quizzical"
          className="bg-zinc-200 hover:cursor-pointer h-32 drop-shadow-md rounded-lg flex justify-center items-center">
          Quizzical
        </Link>
      </div>
      <div className="">
        {projElements}
      </div>
    </div>
  );
}