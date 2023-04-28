import BlackjackCover from "./BlackjackCover";
import BlackjackInterface from "./BlackjackInterface";
import { useState } from "react";

export default function BlackjackPage() {
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