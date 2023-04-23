import Die from "./Die";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function TenzieInterface() {

  const [dice, setDice] = useState([
    {
      value: 1,
      isHeld: false,
      id: nanoid()
    }
  ]);
  const [tenzies, setTenzies] = useState(false);

  useEffect(() => {
    setDice(allNewDice());
  }, []);
  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  function allNewDice() {
    const newDice = []
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie())
    }
    return newDice;
  }

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function holdDice(id) {
    setDice(oldDice => oldDice.map(die => {
      return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
    }));
  }

  function rollDice() {
    if (!tenzies) {
      setDice(oldDice => oldDice.map(die => {
        return die.isHeld ? die : generateNewDie();
      }));
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
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
    <div className="project-bg">
      {tenzies && <Confetti />}
      <div className="bg-stone-100 w-[450px] h-[450px] flex flex-col justify-around items-center p-7 rounded-xl">
        <h1 className="text-6xl font-semibold">Tenzies</h1>
        <p className="text-center">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="grid grid-cols-5 gap-5">
          {diceElements}
        </div>
        <button 
          className="bg-indigo-500 text-white rounded-lg text-2xl h-12 w-36" 
          onClick={rollDice}
        >
          {tenzies ? "New Game" : "Roll"}
        </button>
      </div>
    </div>
  );
}