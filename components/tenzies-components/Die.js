import { useState, useEffect } from "react";

export default function Die(props) {
  const styleArr = [
    "row-start-1 col-start-1",
    "row-start-3 col-start-3",
    "row-start-1 col-start-3",
    "row-start-3 col-start-1",
    "row-start-2 col-start-1",
    "row-start-2 col-start-3"
  ];
  let style = "w-3 h-3 rounded-full bg-black ";
  
  const dieDotElements = [];
  for (let i=0; i<props.value; i++) {
    dieDotElements.push(
      <div className={style + styleArr[i]}></div>
    );
  }
  if (props.value % 2 != 0) {
    dieDotElements.pop();
    dieDotElements.push(
      <div className={style + "row-start-2 col-start-2"}></div>
    )
  } 

  return (
    <div
      onClick={props.holdDice}
      className={`${props.isHeld ? "bg-teal-300" : "bg-white"} hover:cursor-pointer w-14 h-14 drop-shadow-md rounded-lg flex justify-center items-center`}
    >
      <div className="grid grid-rows-3 grid-cols-3 gap-1">
        {dieDotElements}
      </div>
    </div>
  );
}