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
    busted: false,
  });
  const [player, setPlayer] = useState({
    aces: 0,
    sum: 0,
    busted: false,
    stand: false
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
  }, [deck]);
  useEffect(() => {
    isBusted();
  }, [playerCards, dealerCards]);
  
  function newGame() {
    setDeck(getDeck());
  }
  // hit two cards for both dealer and player, dealer's first card is hidden
  function startGame() {
    const dealerDraw1 = hitCard();    
    const playerDraw1 = hitCard();    
    const dealerDraw2 = hitCard();    
    const playerDraw2 = hitCard();    
    setDealer({
      aces: dealerDraw1.aces + dealerDraw2.aces,
      sum: dealerDraw1.sum + dealerDraw2.sum,
      busted: false
    });
    setDealerCards([dealerDraw1.hand, dealerDraw2.hand]);
    setPlayer({
      aces: playerDraw1.aces + playerDraw2.aces,
      sum: playerDraw1.sum + playerDraw2.sum,
      busted: false,
      stand: false
    });
    setPlayerCards([playerDraw1.hand, playerDraw2.hand]);
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
    const card = updatedDeck.pop();
    setDeck(updatedDeck);
    let draw = {
      hand: card,
      sum: 0,
      aces: 0
    }
    if (/\d/.test(card.rank)) {
      draw.sum = parseInt(card.rank);
    }else if (card.rank === "ace") {
      draw.sum = 11; 
      draw.aces = 1;
    }else {
      draw.sum = 10;
    }
    return draw;
  }
  function isBusted() {
    if (player.sum > 21) {
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
    }else if (dealer.sum > 21){
      let updatedDealer = dealer;
      while (updatedDealer.sum > 21 && updatedDealer.aces > 0) {
        updatedDealer.sum -= 10;
        updatedDealer.aces--;
      }
      if (updatedDealer.sum > 21) updatedDealer.busted = true;
      setDealer({
        ...dealer,
        sum: updatedDealer.sum,
        aces: updatedDealer.aces,
        busted: updatedDealer.busted
      });
    }
  }
  // function dealerHit() {
  //   const draw = hitCard();
  //   setDealer({
  //     ...dealer,
  //     sum: dealer.sum + draw.sum,
  //     aces: dealer.aces + draw.aces
  //   });
  //   setDealerCards([...dealerCards, draw.hand]);
  // }
  function dealerTurn() {
    let updatedDealer = dealer;
    let updatedDealerCards = dealerCards;
    while (updatedDealer.sum < 17) {
      const draw = hitCard();
      updatedDealer.sum += draw.sum;
      updatedDealer.aces += draw.aces;
      updatedDealerCards.push(draw.hand);
    }
    setDealer({
      ...dealer,
      sum: updatedDealer.sum,
      aces: updatedDealer.aces
    });
    setDealerCards(dealerCards.concat(updatedDealerCards));
  }
  function playerHit() {
    const draw = hitCard();
    setPlayer({
      ...player,
      sum: player.sum + draw.sum,
      aces: player.aces + draw.aces
    });
    setPlayerCards([...playerCards, draw.hand]);
  }
  function playerStand() {
    setPlayer({
      ...player,
      stand: true
    });
    dealerTurn();
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
        {dealer.busted && <p>Busted, dealer lose</p>}
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
        <div>
          {player.busted && <p>Busted, you lose</p>}  
          {(player.busted || dealer.busted) && 
          <button onClick={newGame}>New Game</button>}
        </div>
        {!(player.busted || player.stand) &&
        <div>
          <button onClick={playerHit}>Hit</button>
          <button onClick={playerStand}>Stand</button>
        </div>}
      </div>
    </div>
  );
}