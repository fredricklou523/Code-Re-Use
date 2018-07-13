const dog = {
name: 'Scout',
breed: ['Husky', 'German Shepherd'],
age: 4,
happiness: 50,
hunger: 10,
energy: 100,
};



dog['feed'] = function (food) {
if(dog.hunger - food > 0) {
  dog.hunger -= food;
} else {
  dog.hunger = 0;
}
}

dog['play'] = function(time) {
if(dog.happiness + time < 100) {
  dog.happiness += time;
} else {
  dog.happiness = 100;
}

if(dog.energy - time > 0) {
  dog.energy -= time;
} else {
  dog.energy = 0;
}
}

dog['nap'] = function(time) {
if(dog.energy + time < 100) {
  dog.energy += time;
} else {
  dog.energy = 100;
}
}



//Psuedoclassical

var Dog = function(name, breed, age, happiness, hunger, energy) {

  var obj = Object.create(Dog.prototype);
  this.name= name;
  this.breed= breed;
  this.age= age;
  this.happiness= happiness;
  this.hunger= hunger;
  this.energy= energy;

}

Dog.prototype.feed = function (food) {
if(this.hunger - food > 0) {
  this.hunger -= food;
} else {
  this.hunger = 0;
}
}

Dog.prototype.play = function(time) {
if(this.happiness + time < 100) {
  this.happiness += time;
} else {
  this.happiness = 100;
}

if(this.energy - time > 0) {
  this.energy -= time;
} else {
  this.energy = 0;
}
}

Dog.prototype.nap = function(time) {
if(this.energy + time < 100) {
  this.energy += time;
} else {
  this.energy = 100;
}
}

Mobey = new Dog("Mobey", "Pit/Lab", 6, 9, 9, 2);
Mobey.feed(1);
Mobey.play(3)
