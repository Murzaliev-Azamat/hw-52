import Card from "./Card";

class PockerHand {
  constructor(private cards: Card[]) {
  }

  public getOutcome(): string {
    const outcomes: string[] = [];

    if (this.isFlush()) {
      outcomes.push('flush');
    }

    if (this.isThreeOfKind()) {
      outcomes.push('three of a kind');
    }

    if (this.isTwoPairs()) {
      outcomes.push('two pairs');
    }

    if (this.isOnePair()) {
      outcomes.push('one pair');
    }


    return outcomes.length === 0 ? 'no pair' : outcomes.join('|');
  }

  private isFlush(): boolean {
    for (let i = 1; i < this.cards.length; i++) {
      if (this.cards[i - 1].suit !== this.cards[i].suit) {
        return false;
      }
    }

    return true;
  }

  private isThreeOfKind(): boolean {
    for (const [rank, count] of Array.from(this.ranksCount())) {
      if (count === 3) {
        return true;
      }
    }

    return false;
  }

  private isTwoPairs(): boolean {
    let pairsCount = 0;

    for (const [rank, count] of Array.from(this.ranksCount())) {
      if (count >= 2) {
        pairsCount++;
      }
    }

    return pairsCount >= 2;
  }

  private isOnePair(): boolean {
    for (const [rank, count] of Array.from(this.ranksCount())) {
      if (count === 2) {
        return true;
      }
    }

    return false;
  }

  private ranksCount(): Map<string, number> {
    const ranksCount: Map<string, number> = new Map();

    for (const card of this.cards) {
      const rankCount = ranksCount.get(card.rank);

      if (rankCount) {
        ranksCount.set(card.rank, rankCount + 1);
      } else {
        ranksCount.set(card.rank, 1);
      }
    }
    return ranksCount;
  }
}

export default PockerHand;
