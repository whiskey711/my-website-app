import { useEffect, useState } from "react";
import Image from "next/image";
import { nanoid } from "nanoid";

export default function BlackjackInterface() {
  const [deck, setDeck] = useState(() => getDeck());
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);

  const [dealer, setDealer] = useState({
    aces: 0,
    sum: 0,
    busted: false
  });
  const [player, setPlayer] = useState({
    aces: 0,
    sum: 0,
    busted: false
  });

  const playerCardsElements = playerCards.map((card) => {
    return (
      <div key={nanoid()} className="mr-2 my-3">
        {card.rank + "_of_" + card.suit}
      </div>
    );
  });
  const dealerCardsElements = dealerCards.map((card) => {
    return (
      <div key={nanoid()} className="mr-2 my-3">
        {card.rank + "_of_" + card.suit}
      </div>
    );
  })

  useEffect(() => {
    startGame();
  }, []);
  useEffect(() => {
    isBusted();
  }, [playerCards]);
  
  // hit two cards for both dealer and player, dealer's first card is hidden
  function startGame() {
    let updatedDeck = deck;
    const draw1 = updatedDeck.pop();
    const draw2 = updatedDeck.pop();
    setDealerCards([draw1, draw2]);
    setDeck(updatedDeck);
  }
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
    let updatedDeck = deck;
    const draw = updatedDeck.pop();
    setDeck(updatedDeck);
    setPlayerCards((prevCards) => [...prevCards, draw]);
    const updatedPlayer = player;
    let rank = 0;
    if (/\d/.test(draw.rank)) {
      rank = parseInt(draw.rank);
    }else if (draw.rank === "ace") {
      rank = 11; 
      updatedPlayer.aces++;
    }else {
      rank = 10;
    }
    updatedPlayer.sum += rank;
    setPlayer({
      ...player,
      aces: updatedPlayer.aces,
      sum: updatedPlayer.sum
    });
  }
  function isBusted() {
    if (player.sum <= 21) return;
    let updatedPlayer = player;
    while (updatedPlayer.sum > 21 && updatedPlayer.aces > 0) {
      updatedPlayer.sum -= 10;
      updatedPlayer.aces--;
    }
    if (updatedPlayer.sum > 21) updatedPlayer.busted = true;
    setPlayer({
      ...player,
      sum: updatedPlayer.sum,
      aces: updatedPlayer.aces,
      busted: updatedPlayer.busted
    });
    console.log("here");
  }

  return (
    <div>
      <div>
        <h1>Dealer</h1>
        <div className="flex">
          {dealerCardsElements}
        </div>
        <div>
          Score: {dealer.sum}
        </div>
      </div>
      <hr />
      <div>
        <h1>You</h1>
        <div className="flex">
          {playerCardsElements}
        </div>
        <div>
          Score: {player.sum}
        </div>
        {player.busted &&
        <div>
          <p>Busted, you lose</p>  
          <button>New Game</button>
        </div>}
        {!player.busted &&
        <div>
          <button onClick={hitCard}>Hit</button>
          <button>Stand</button>
        </div>}
      </div>
    </div>
  );
}