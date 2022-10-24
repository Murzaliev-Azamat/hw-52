import Card from "./Card";

class CardDeck {
  constructor(private cards: Card[] = []) {
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = ['diams', 'clubs', 'hearts', 'spades'];
    for (let rank of ranks) {
      for (let suit of suits) {
        const card = new Card(rank, suit);
        cards.push(card);
      }
    }
  }

  public getCard(): Card{
    return this.cards.splice(Math.floor(Math.random() * this.cards.length), 1)[0];
  }

  public getCards(howMany: number): Card[]{
    const countCards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      countCards.push(this.getCard());
    }
    return countCards;
  }

}

export default CardDeck;