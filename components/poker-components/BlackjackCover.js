import Image from "next/image";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function BlackjackCover(props) {

  return (
    <div>
      <h1>Blackjack</h1>
      <p>Getting a count as close to 21 as possible, without going over 21</p>
      <div>
        <button onClick={props.startGame}>Start</button>
      </div>
    </div>
  );
}