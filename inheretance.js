
function Animal(color, sound) {
  this.color = color;
  this.sound = sound;
  this.yell = () => console.log(this.sound);
  this. isCute = true;
}

let dog = new Animal('grey', 'bark');

console.log(dog);
Animal.prototype.hasName = true;
console.log(Animal);
console.log(dog.hasName);
