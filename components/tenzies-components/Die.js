import { useState, useEffect } from "react";

export default function Die(props) {
  return (
    <div
      onClick={props.holdDice}
      className={`${props.isHeld ? "bg-teal-300" : "bg-white"} hover:cursor-pointer`}
    >
      <h1>{props.value}</h1>
    </div>
  );
}