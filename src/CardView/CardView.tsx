import React from 'react';

interface CardViewProps {
  rank: string;
  suit: string;
}

const CardView: React.FC<CardViewProps> = props => {
  const cardClass = 'card rank-' + props.rank + ' ' + props.suit;
  let cardSymbol: string = '';

  if (props.suit === 'diams') {
    cardSymbol = '♦';
  } else if (props.suit === 'clubs') {
    cardSymbol = '♣';
  } else if (props.suit === 'hearts') {
    cardSymbol = '♥';
  } else if (props.suit === 'spades') {
    cardSymbol = '♣';
  }

  return (
    <div className="playingCards faceImages">
      <div className={cardClass}>
        <span className="rank">{props.rank}</span>
        <span className="suit">{cardSymbol}</span>
      </div>
    </div>
  );
};

export default CardView;