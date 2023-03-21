import BlackjackInterface from "@/components/poker-components/BlackjackInterface";
import BlackjackCover from "@/components/poker-components/BlackjackCover";
import { useState } from "react";

export default function blackjack() {
  const [start, setStart] = useState(false);

  function startGame() {
    setStart(true);
  }

  return (
    <div>
      {!start && <BlackjackCover startGame={startGame} />}
      {start && <BlackjackInterface />}
    </div>
  );
}