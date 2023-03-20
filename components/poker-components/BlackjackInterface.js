import { useEffect, useState } from "react";

export default function BlackjackInterface() {
  const [deck, setDeck] = useState([]);
  useEffect(() => {setDeck(getDeck())}, []);

  function getDeck() {
    const ranks = ["2", " 3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king", "ace"];
    const suits = ["clubs", "diamonds", "hearts", "spades"];
    let newDeck = [];
    for (let i=0; i<suits.length; i++) {
      for (let j=0; j<ranks.length; j++) {
        newDeck.push(ranks[j] + "_of_" + suits[i]);
      }
    }
    console.log(newDeck);
    return newDeck;
  }

  return (
    <div>
      blackjack
    </div>
  );
}