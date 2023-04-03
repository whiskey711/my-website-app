import Image from "next/image";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function BlackjackCover(props) {
  const [nums, setNums] = useState([0,1,2,3,4]);
  const numElements = nums.map((num) => {
    return (<div key={nanoid()}
      className="h-32 w-32 m-5 border bg-lime-300 last:animate-slidein">
      {num}
    </div>);
  })

  return (
    <div>
      <h1>Blackjack</h1>
      <p>Getting a count as close to 21 as possible, without going over 21</p>
      <div>
        <button onClick={props.startGame}>Start</button>
      </div>

      <div className="flex">
        {numElements}
      </div>

    </div>
  );
}