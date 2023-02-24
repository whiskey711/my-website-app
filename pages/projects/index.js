import Link from "next/link";

export default function projects(){
  return (
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
  );
}