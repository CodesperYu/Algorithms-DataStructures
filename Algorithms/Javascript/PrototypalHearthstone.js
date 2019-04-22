// give a card a motto, when you run play function, it would scream the motto
// when it attacks, it would say its attack words
// create a class player, whenever he plays a card, his hand -1

function Card({ name, cost }) {
  this.name = name;
  this.cost = cost;
  this.location = 'hand';
}

Card.prototype.play = function () {
  this.location = 'board';
  console.log('played ', this.name);
};

function Mage({ name, cost }) {
  Card.call(this, { name, cost });
  this.type = 'mage';
}

Mage.prototype = Object.create(Card.prototype);
Mage.prototype.constructor = Mage;

function MageMinions({
  name, cost, summonSpeak, attackSpeak,
}) {
  Mage.call(this, { name, cost });
  this.summonSpreak = summonSpeak;
  this.attackSpeak = attackSpeak;
}

MageMinions.prototype.summon = function () {
  this.play();
  console.log(this.summonSpeak);
};

MageMinions.prototype.attack = function () {
  console.log(this.attackSpeak);
};

MageMinions.prototype = Object.create(Mage.prototype);
MageMinions.prototype.constructor = MageMinions;

const sorcerersApprentice = new MageMinions({
  name: 'Sorcerer\'s Apprentice',
  cost: 2,
  summonSpeak: 'Some day I\'ll be just like you!',
  attackSpeak: 'Me?!',
});

console.log(sorcerersApprentice.play());
