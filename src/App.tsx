import React, {useState} from 'react';
import './App.css';
import CardView from "./CardView/CardView";
import Card from "./lib/Card";
import CardDeck from "./lib/CardDeck";
import PokerHand from "./lib/PokerHand";

function App() {

  const [cards, setCards] = useState<Card[]>([]);

  const dealCards = () => {
    const newCardDeck = new CardDeck();
    setCards(newCardDeck.getCards(5));
  };

  if (cards.length === 0) {
    return (
      <div className="App">
        <button onClick={dealCards}>Раздать карты</button>
      </div>
    );
  }

  const myHand = new PokerHand(cards);
  const combination = myHand.getOutcome();

  return (
    <div className="App">
      <button onClick={dealCards}>Раздать карты</button>
      <CardView rank={cards[0].rank} suit={cards[0].suit}/>
      <CardView rank={cards[1].rank} suit={cards[1].suit}/>
      <CardView rank={cards[2].rank} suit={cards[2].suit}/>
      <CardView rank={cards[3].rank} suit={cards[3].suit}/>
      <CardView rank={cards[4].rank} suit={cards[4].suit}/>
      <div>{combination}</div>
    </div>
  );
}

export default App;
