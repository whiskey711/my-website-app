import Link from "next/link";

export default function projects(){
  return (
    <div className="grid grid-cols-2 gap-5">
      <Link 
        href="/projects/travel-journal" 
        className="bg-zinc-200">Travel Journal</Link>
      <Link 
        href="/projects/meme-generator" 
        className="bg-zinc-200">Meme Generator</Link>
      <Link 
        href="/projects/tenzies" 
        className="bg-zinc-200">Tenzies</Link>
      <Link 
        href="/projects/quizzical" 
        className="bg-zinc-200">Quizzical</Link>
    </div>
  );
}