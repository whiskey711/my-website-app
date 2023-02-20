import Die from "./die";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

export default function TenzieInterface() {
  
  const [dice, setDice] = useState([
    {
      value: 1,
      isHeld: false,
      id: nanoid()
    }
  ]);

  useEffect(() => {
    setDice(allNewDice());
  }, [])

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie())
    }
    return newDice;
  }

  function generateNewDie(){
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }

  const diceElements = dice.map((die) => {
    return (
      <Die 
        key={die.id} 
        value={die.value} 
        isHeld={die.isHeld} 
        holdDice={() => holdDice(die.id)} 
      />
    )
  })

  return (
    <div className="container">
      <h1>Tenzies</h1>
      <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="grid grid-cols-5 gap-2">
        {diceElements}
      </div>
      <button>Roll</button>
    </div>
  );
}