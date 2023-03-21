import { useEffect, useState } from "react";
import Image from "next/image";
import BlackjackCover from "./BlackjackCover";

export default function BlackjackInterface() {
  const [deck, setDeck] = useState([]);
  const [playerCardsElements, setPlayerCardsElements] = useState([]);
  let playerCards = [];
  const [playerCount, setPlayerCount] = useState(0);
  useEffect(() => {
    setDeck(getDeck());

  }, []);

  function getDeck() {
    const ranks = ["2", " 3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
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
    //return shuffle(newDeck);
    return newDeck;
  }
  function shuffle(newDeck) {
    for (let i = newDeck.length-1; i>0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
    }
    return newDeck;
  }
  function hitCard() {
    const draw = deck.pop();
    setPlayerCardsElements(playerCardsElements.concat(
      <div className="mr-2 my-3">
        {draw.rank + "_of_" + draw.suit}
      </div>
    ));
    playerCards.push(draw);
    if (/\d/.test(draw.rank)) {
      setPlayerCount(prevCount => prevCount + parseInt(draw.rank));
    }else {
      setPlayerCount(prevCount => prevCount + 11); 
    }
    if (playerCount > 21 && checkAce(playerCards)) {
      setPlayerCount(prevCount => prevCount - 10);
    }
  }
  function checkAce(cards) {
    const aceIndex = cards.findIndex((card) => card.rank === "ace");
    if (aceIndex != -1) {
      cards.splice(aceIndex, 1);
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
        <button>Stay</button>
      </div>
    </div>
  );
}