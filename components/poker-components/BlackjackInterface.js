import { useEffect, useState } from "react";
import PokerCard from "./PokerCard";
import { nanoid } from "nanoid";

export default function BlackjackInterface() {
  const [deck, setDeck] = useState(() => getDeck());
  const [playerCards, setPlayerCards] = useState([]);
  const [playerWon, setPlayerWon] = useState(false);
  const [playerStand, setPlayerStand] = useState(false);
  const [dealerCards, setDealerCards] = useState([]);
  const [dealerWon, setDealerWon] = useState(false);
  const [dealerStand, setDealerStand] = useState(false);

  const [dealer, setDealer] = useState({
    aces: 0,
    sum: 0,
    bust: false,
  });
  const [player, setPlayer] = useState({
    aces: 0,
    sum: 0,
    bust: false,
  });

  const playerCardsElements = playerCards.map((card) => {
    return <PokerCard card={card} />;
  });
  const dealerCardsElements = dealerCards.map((card) => {
    return <PokerCard card={card} />;
  })

  useEffect(() => {
    startGame();
  }, [deck]);
  useEffect(() => {
    isBusted();
  }, [playerCards, dealerCards]);
  useEffect(() => {
    if (dealerStand && !dealer.bust) {
      compare();
    }
  }, [dealerStand])
  
  function newGame() {
    setDeck(getDeck());
  }
  // hit two cards for both dealer and player, dealer's first card is hidden
  function startGame() {   
    const playerDraw1 = hitCard();  
    const dealerDraw1 = hitCard();  
    const playerDraw2 = hitCard();
    const dealerDraw2 = hitCard();  
    setDealerWon(false);   
    setDealer({
      aces: dealerDraw1.aces + dealerDraw2.aces,
      sum: dealerDraw1.sum + dealerDraw2.sum,
      bust: false
    });
    setDealerCards([dealerDraw1.hand, dealerDraw2.hand]);
    setDealerStand(false);
    setPlayerWon(false);
    setPlayer({
      aces: playerDraw1.aces + playerDraw2.aces,
      sum: playerDraw1.sum + playerDraw2.sum,
      bust: false
    });
    setPlayerCards([playerDraw1.hand, playerDraw2.hand]);
    setPlayerStand(false);
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
    console.log(card.rank);
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
      if (updatedPlayer.sum > 21) updatedPlayer.bust = true;
      setPlayer({
        ...player,
        sum: updatedPlayer.sum,
        aces: updatedPlayer.aces,
        bust: updatedPlayer.bust
      });
    }else if (dealer.sum > 21){
      let updatedDealer = dealer;
      while (updatedDealer.sum > 21 && updatedDealer.aces > 0) {
        updatedDealer.sum -= 10;
        updatedDealer.aces--;
      }
      if (updatedDealer.sum > 21) updatedDealer.bust = true;
      setDealer({
        ...dealer,
        sum: updatedDealer.sum,
        aces: updatedDealer.aces,
        bust: updatedDealer.bust
      });
    }
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
  function playerEndTurn() {
    setPlayerStand(true);
    dealerTurn();
  }
  function dealerTurn() {
    let updatedDealer = dealer;
    let newCards = [];
    while (updatedDealer.sum < 17) {
      const draw = hitCard();
      updatedDealer.sum += draw.sum;
      updatedDealer.aces += draw.aces;
      newCards.push(draw.hand);
    }
    setDealer({
      ...dealer,
      sum: updatedDealer.sum,
      aces: updatedDealer.aces,
    });
    setDealerCards(dealerCards.concat(newCards));
    setDealerStand(true);
  }
  function compare() {
    if (dealer.sum > player.sum) {
      setDealerWon(true);
    }else if (dealer.sum < player.sum) {
      setPlayerWon(true);
    }else {
      setPlayerWon(true);
      setDealerWon(true);
    }
  }

  return (
    <div className="min-h-screen bg-yellow-300 flex justify-center items-center">
      <div className="bg-white w-2/3 rounded-lg">
        <div className="text-center">
          <h1>Dealer <span>{dealer.sum}</span></h1>
          <div className="flex justify-center">
            {dealerCardsElements}
          </div>
        </div>
        <div className="text-center">
          {dealer.bust && <p>Dealer bust, you won</p>}
          {player.bust && <p>You bust, you lose</p>} 
          {(playerWon && !dealerWon) && <p>You have greater hand, you won</p>}
          {(!playerWon && dealerWon) && <p>Dealer have greater hand, you lose</p>}
          {(playerWon && dealerWon) && <p>Draw</p>}
        </div>
        <div className="text-center">
          <h1>You</h1>
          <div className="flex justify-center">
            {playerCardsElements}
          </div>
          <div>          
            {(player.bust || dealer.bust || dealerWon || playerWon) && 
            <button onClick={newGame}>New Game</button>}
          </div>
          {!(player.bust || playerStand) &&
          <div>
            <button onClick={playerHit}>Hit</button>
            <button onClick={playerEndTurn}>Stand</button>
          </div>}
        </div>
      </div>
    </div>
  );
}