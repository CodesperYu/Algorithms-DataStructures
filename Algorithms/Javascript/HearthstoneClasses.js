// give a card a motto, when you run play function, it would scream the motto
// when it attacks, it would say its attack words
// create a class player, whenever he plays a card, his hand -1,
class Player {
  constructor({ id, username }) {
    this.id = id;
    this.username = username;
    this.deckCount = 33;
    this.hand = 7;
    this.mana = 3;
  }

  playerSummon(card) {
    this.subtractHandCount(1);
    this.subtractMana(card.cost);
    card.summon();
  }

  subtractHandCount(num) {
    this.hand -= num;
  }

  subtractMana(cost) {
    this.mana -= cost;
  }
}

class Card {
  constructor({ name, cost }) {
    this.name = name;
    this.cost = cost;
    this.location = 'hand';
  }

  play() {
    this.location = 'board';
    console.log('played ', this.name);
  }
}

class Mage extends Card {
  constructor({ name, cost }) {
    super({ name, cost });
    this.type = 'Mage';
  }
}

class MageMinions extends Mage {
  constructor(
    {
      name, cost, summonSpeak, attackSpeak,
    },
  ) {
    super({ name, cost });
    this.summonSpeak = summonSpeak;
    this.attackSpeak = attackSpeak;
    this.attacked = false;
  }

  summon() {
    this.play();
    console.log(this.summonSpeak);
  }

  attack() {
    console.log(this.attackSpeak);
  }
}

const player1 = new Player({
  id: 1,
  username: 'Jasper Yu',
});

const sorcerersApprentice = new MageMinions({
  name: 'Sorcerer\'s Apprentice',
  cost: 2,
  summonSpeak: 'Some day I\'ll be just like you!',
  attackSpeak: 'Me?!',
});

player1.playerSummon(sorcerersApprentice);
