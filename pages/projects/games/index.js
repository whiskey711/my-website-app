import Link from "next/link";

export default function games() {
  return (
    <div>
      <Link href="./games/blackjack">Blackjack</Link>
      <Link href="./games/texas-poker">Texas Holdem Poker</Link>
    </div>
  );
}