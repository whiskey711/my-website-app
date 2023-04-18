import Link from "next/link";

export default function games() {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numElements = nums.map(num => {
    return (
      <div className="relative flex w-full h-auto justify-center items-center group rounded-lg shadow-xl p-3 bg-platinum hover:bg-gradient-to-br from-orange-peel to-phantone-red transition duration-300">
        <img src="/vercel.svg" alt="" className="rounded-lg group-hover:opacity-20 transition duration-300" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:block transition text-center text-white">
          <h1 className="text-3xl font-bold tracking-wider">{num}</h1>
          <p className="mb-4 mt-1">Paragraph</p>
          <button className="font-semibold px-5 py-2 rounded-md bg-white text-black">
            Check
          </button>
        </div>
      </div>
    )
  })

  return (
    <div>
      <Link href="./games/blackjack">Blackjack</Link>
      <Link href="./games/texas-poker">Texas Holdem Poker</Link>
      <div className="m-10 grid grid-cols-2 gap-10">
        {numElements}     
      </div>
      <div className="bg-black h-80"></div>
      <div className="bg-red-700 h-80"></div>
      <div className="bg-yellow-500 h-80"></div>
    </div>
  );
}