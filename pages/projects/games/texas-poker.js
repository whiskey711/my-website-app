import { useState, useEffect } from "react";

export default function texasPoker() {
  const [cards, setCards] = useState(() => getDeck());

  function getDeck() {
    console.log("new deck");
    return [6,5,658,2,47];
  }

  return (
    <div>
      <h1>Texas holdem poker</h1>
    </div>
  );
}