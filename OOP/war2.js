class War {
  constructor() {
    this.gameOver = false;
    this.player1 = null;
    this.player2 = null;
  }

  initialize() {
    const deck = new Deck();
    deck.shuffle();
    const [firstHalf, secondHalf] = deck.split();
    const p1Data = {
      name: 'Player 1',
      deck: firstHalf,
    };
    const p2Data = {
      name: 'Player 2',
      deck: secondHalf,
    };
    this.player1 = new Player(p1Data);
    this.player2 = new Player(p2Data);
  }

  goToWar() {
    while (!this.gameOver) this.battle();
  }

  endGame() {
    this.gameOver = true;
  }

  compareFieldCards() {
    const player1Card = this.player1.getTopFieldCard();
    const player2Card = this.player2.getTopFieldCard();
    console.log('p1 card ', player1Card);
    console.log('p2 card ', player2Card);
    if (player1Card > player2Card) {
      return this.player1;
    }
    if (player2Card > player1Card) {
      return this.player2;
    }
    return 'Tie';
  }

  battle() {
    const didPlayerWin = false;
    if (this.player1.cardsOnField.length === 0) {
      this.player1.addNumCardsToField(1);
      this.player2.addNumCardsToField(1);
    }
    const winner = this.compareFieldCards(this.player1.getTopFieldCard(), this.player1.getTopFieldCard());
    if (winner !== 'Tie') {
      console.log(winner.name, 'won this round');
      const allFieldCards = [...this.player1.getFieldCards(), ...this.player2.getFieldCards()];
      winner.shuffleInNewCards(allFieldCards);
      this.player1.clearFieldCards();
      this.player2.clearFieldCards();
    } else {
      console.log('Tie!');
      const p1DeckLength = this.player1.deck.getLength();
      const p2DeckLength = this.player2.deck.getLength();
      const lowestVal = Math.min(4, p1DeckLength, p2DeckLength);

      if (lowestVal === 0) {
        if (p1DeckLength === 0) {
          console.log('Player 2 Wins');
        } else {
          console.log('Player 1 Wins');
        }
        return this.endGame();
      }

      this.player1.addNumCardsToField(lowestVal);
      this.player2.addNumCardsToField(lowestVal);
      this.battle();
    }

    if (didPlayerWin) {
      this.endGame();
    }
  }
}


class Deck {
  constructor(initialCards) {
    this.cards = initialCards || this._createDefaultDeck();
  }

  _createDefaultDeck() {
    const newDeck = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 1; j < 14; j++) {
        newDeck.push(j);
      }
    }
    return newDeck;
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // swap elements
    }
  }

  addNewCards(newCards) {
    this.cards = [...this.cards, ...newCards];
  }

  split() {
    // return two new decks, 1st half and second half
    const midPoint = Math.floor(this.cards.length / 2);
    const firstHalf = new Deck(this.cards.slice(0, midPoint));
    const secondHalf = new Deck(this.cards.slice(midPoint));
    return [firstHalf, secondHalf];
  }

  getLength() {
    return this.cards.length;
  }

  popCard() {
    return this.cards.pop();
  }
}


class Player {
  constructor({ name, deck }) {
    this.name = name;
    this.deck = deck;
    this.cardsOnField = [];
  }

  addNumCardsToField(numCards) {
    for (let i = 0; i < numCards; i++) {
      this.cardsOnField.push(this.drawTopCard());
    }
  }

  getFieldCards() {
    return this.cardsOnField;
  }

  clearFieldCards() {
    this.cardsOnField = [];
  }

  getTopFieldCard() {
    if (this.cardsOnField.length === 0) return null;
    return this.cardsOnField[this.cardsOnField.length - 1];
  }

  drawTopCard() {
    console.log(this.name, this.deck.getLength());
    const card = this.deck.popCard();
    return card;
  }

  shuffleInNewCards(newCards) {
    this.deck.addNewCards(newCards);
    this.deck.shuffle();
  }

  didPlayerWinWar() {
    return this.deck.getLength() >= 52;
  }
}

const warGame = new War();
warGame.initialize();
warGame.goToWar();
