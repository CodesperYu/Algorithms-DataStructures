// Array.prototype.sum = function () {
//   const arr = this;
//   const result = arr.reduce((a, b) => a + b, 0);
//   return result;
// };

// const sum = [1, 2, 3].sum();
// console.log(sum);

// create class that contains players
// create deck

// War Game
class War {
  constructor() {
    this.gameOver = false;
    this.player1 = null;
    this.player2 = null;
  }

  initialize() {
    const deck = this.createDeck();
    const p1Data = {};
    const p2Data = {};
    p1Data.deck = deck.slice(0, 26);
    p1Data.name = 'Player 1';
    p2Data.deck = deck.slice(26);
    p2Data.name = 'Player 2';
    this.player1 = new Player(p1Data);
    this.player2 = new Player(p2Data);
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  createDeck() {
    const newDeck = [];
    for (let i = 0; i < 4; i++) {
      for (let j = 1; j < 14; j++) {
        newDeck.push(j);
      }
    }
    return this.shuffle(newDeck);
  }

  autoPlay() {
    while (!this.gameOver) {
      this.goToWar();
    }
  }

  endGame() {
    this.gameOver = true;
  }

  compareCards(player1Card, player2Card) {
    console.log('p1 card ', player1Card);
    console.log('p2 card ', player2Card);
    if (player1Card > player2Card) {
      return 'Player 1';
    } if (player2Card > player1Card) {
      return 'Player 2';
    }
    return 'Tie';
  }

  addXCards(numCards, cards, player) {
    for (let i = 0; i < numCards; i++) {
      cards.push(player.getCard());
    }
  }

  goToWar(player1Cards = [this.player1.getCard()], player2Cards = [this.player2.getCard()]) {
    let didPlayerWin = false;
    const result = this.compareCards(player1Cards[player1Cards.length - 1], player2Cards[player2Cards.length - 1]);
    console.log(result, 'won this round');
    if (result === 'Player 1') {
      didPlayerWin = this.player1.playerWins([...player1Cards, ...player2Cards]);
    } else if (result === 'Player 2') {
      didPlayerWin = this.player2.playerWins([...player1Cards, ...player2Cards]);
    } if (result === 'Tie') {
      const p1DeckLength = this.player1.getDeckLength();
      const p2DeckLength = this.player2.getDeckLength();
      const lowestVal = Math.min(4, p1DeckLength, p2DeckLength);
      this.addXCards(lowestVal, player1Cards, this.player1);
      this.addXCards(lowestVal, player2Cards, this.player2);
      if (lowestVal === 0) {
        if (p1DeckLength === 0) {
          console.log('Player 2 Wins');
        } else {
          console.log('Player 1 Wins');
        }
        this.endGame();
      } else {
        this.goToWar(player1Cards, player2Cards);
      }
    }

    if (didPlayerWin) {
      this.endGame();
    }
  }
}


class Player {
  constructor({ name, deck }) {
    this.name = name;
    this.deck = deck;
  }

  getDeckLength() {
    return this.deck.length;
  }

  getCard() {
    console.log(this.name, this.deck, this.deck.length);
    const card = this.deck.pop();
    return card;
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
      [array[i], array[j]] = [array[j], array[i]]; // swap elements
    }
    return array;
  }

  addNewCards(newCards) {
    this.deck = this.shuffle([...this.deck, ...newCards]);
  }

  playerWins(newCards) {
    this.addNewCards(newCards);
    if (this.deck.length >= 52) {
      return true;
    }
    return false;
  }
}

const game1 = new War();
game1.initialize();
game1.autoPlay();
