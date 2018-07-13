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

//functional class
var dog = function(obj, name, breed, age, happiness, hunger, energy) {

  var obj = {
    name: name,
    breed: breed,
    age: age,
    happiness: happiness,
    hunger: hunger,
    energy: energy,
  }
  return obj;
}



//Prototypal
var Dog = function(name, breed, age, happiness, hunger, energy) {

  var obj = Object.create(Dog.prototype);
  obj.name= name;
  obj.breed= breed;
  obj.age= age;
  obj.happiness= happiness;
  obj.hunger= hunger;
  obj.energy= energy;

  return obj;
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
