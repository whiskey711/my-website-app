import { useState, useEffect } from "react";

export default function texasPoker() {
  const cards = [2, 1, 4, 8, 3, 9];
  const [cardElements, setCardElements] = useState([]);

  function addCard() {
    const draw = cards.pop();
    setCardElements(cardElements.concat(
      <div className="h-52 w-52 bg-lime-500">
        {draw}
      </div>
    ));
  }

  return (
    <div>
      <h1>Texas holdem poker</h1>
      <div className="flex">
        {cardElements}
      </div>
      <button onClick={addCard}>Hit</button>
    </div>
  );
}