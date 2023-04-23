import Link from "next/link";

export default function games() {
  return (
    <div className="project-bg grid grid-cols-4 gap-10">
      <Link 
        className="bg-stone-100 rounded-lg h-5/6"
        href="./games/blackjack">
        <h1 className="text-3xl font-medium">Blackjack</h1>
      </Link>
      <Link 
        className="bg-stone-100 rounded-lg h-5/6"
        href="./games/texas-poker">
        <h1 className="text-3xl font-medium">Texas Holdem Poker</h1>
      </Link>
      <Link 
        className="bg-stone-100 rounded-lg h-5/6"
        href="">
        <h1 className="text-3xl font-medium">Mine Sweeper</h1>
      </Link>
      <Link 
        className="bg-stone-100 rounded-lg h-5/6"
        href="">
        <h1 className="text-3xl font-medium">Texas Holdem Poker</h1>
      </Link>
    </div>
  );
}