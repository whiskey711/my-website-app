import { useEffect, useState } from "react";
import Image from "next/image";
import { nanoid } from "nanoid";

export default function BlackjackInterface() {
  const [deck, setDeck] = useState(() => getDeck());
  const [playerCardsElements, setPlayerCardsElements] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [playerCount, setPlayerCount] = useState(0);
  useEffect(() => {
    hitCard();
    //hitCard();
  }, []);
  useEffect(() => {
    if (playerCount > 21 && checkAce()) {
      setPlayerCount(prevPlayerCount => prevPlayerCount - 10);
    }
  }, [playerCards]);

  function getDeck() {
    const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    const suits = ["clubs", "diamonds", "hearts", "spades"];
    let newDeck = [];
    for (let i=0; i<suits.length; i++) {
      for (let j=0; j<ranks.length; j++) {
        newDeck.push({
          rank: ranks[j],
          suit: suits[i]
        });
      }
    }
    return shuffle(newDeck);
  }
  function shuffle(newDeck) {
    for (let i = newDeck.length-1; i>0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    return newDeck;
  }
  function hitCard() {
    const updatedDeck = deck;
    const draw = updatedDeck.pop();
    setDeck(updatedDeck);
    setPlayerCardsElements((prevElements) => [
      ...prevElements,
      <div key={nanoid()} className="mr-2 my-3">
        {draw.rank + "_of_" + draw.suit}
      </div>
    ]);
    setPlayerCards((prevCards) => [...prevCards, draw]);
    let rank = 0;
    if (/\d/.test(draw.rank)) {
      rank = parseInt(draw.rank);
    }else if (draw.rank === "ace") {
      rank = 11; 
    }else {
      rank = 10;
    }
    setPlayerCount((prevC) => prevC + rank);
  }
  function checkAce() {
    const aceIndex = playerCards.findIndex((card) => card.rank === "ace");
    if (aceIndex != -1) {
      const updatedCards = playerCards;
      updatedCards.splice(aceIndex, 1);
      setPlayerCards(updatedCards);
      return true;
    }else{
      return false;
    }
  }

  return (
    <div>
      <div>
        <h1>Dealer</h1>
        <div>

        </div>
      </div>
      <div>
        <h1>You</h1>
        <div className="flex">
          {playerCardsElements}
        </div>
        <div>
          Score: {playerCount}
        </div>
        <button onClick={hitCard}>Hit</button>
        <button>Stand</button>
      </div>
    </div>
  );
}