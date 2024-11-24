// Trainer constructor
function Trainer(name, age, pokemon, friends) {
  // Properties
  this.name = name;
  this.age = age;
  this.pokemon = pokemon;
  this.friends = friends;

  // Method
  this.talk = function() {
    console.log('Pikachu! I choose you!');
  };
}

// Pokemon constructor
function Pokemon(name, level) {
  // Properties
  this.name = name;
  this.level = level;
  this.health = 2 * level;
  this.attack = level;

  // Methods
  this.tackle = function(target) {
    console.log(this.name + ' tackled ' + target.name);
    target.health -= this.attack;
    console.log(target.name + "'s health is now reduced to " + target.health);
    if (target.health <= 0) {
      target.faint();
    }
  };

  this.faint = function() {
    console.log(this.name + ' fainted');
  };
}

// Create new instances of Pokemon objects with unique properties
let pikachu = new Pokemon('Pikachu', 69);
let rattata = new Pokemon('Rattata', 1);
let garchomp = new Pokemon('Garchomp', 51);
let mewtwo = new Pokemon('Mewtwo', 99);
let rayquaza = new Pokemon('Rayquaza', 86);
let charizard = new Pokemon('Charizard', 36);
let scizor = new Pokemon('Scizor', 40);

// Create instances of Trainer objects
let trainer1 = new Trainer("Zach", 20, [garchomp, mewtwo, rayquaza, charizard, scizor], []);
let trainer2 = new Trainer("Ash", 18, [pikachu], [trainer1]);
trainer1.friends.push(trainer2);

// Invoke the tackle method of one Pokemon object
trainer1.talk()
console.log(trainer1.name)
console.log(trainer1["age"])
console.log(trainer1.pokemon)
console.log(trainer1["friends"])
rattata.tackle(pikachu)
pikachu.tackle(rattata)

