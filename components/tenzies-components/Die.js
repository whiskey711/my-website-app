import { useState, useEffect } from "react";

export default function Die(props) {
  return (
    <div
      onClick={props.holdDice}
      className={`${props.isHeld ? "bg-teal-300" : "bg-white"} hover:cursor-pointer w-14 h-14 drop-shadow-md rounded-lg flex justify-center items-center`}
    >
      <h1 className="text-4xl font-semibold">
        {props.value}
      </h1>
    </div>
  );
}