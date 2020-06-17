
//______Classes______

// function Animal(name, voice) {
//     this.name = name;
//     this.voice = voice;
// }
// Animal.prototype.say = function() {
//     console.log(this.name, 'goes', this.voice);
// };
// const dog = new Animal('dog', 'woof');
// const cat = new Animal('cat', 'meow');
//
// dog.say();
// cat.say();

class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice= voice;
   }
   say() {
        console.log(this.name, 'goes', this.voice);
   }
}
class Bird extends Animal {
constructor(name, voice, canFly) {
    //конструктор ключегового класса
    super(name, voice);
    this.canFly = canFly;
    }
    say() {
    console.log('Birds dont like to talk')
    }
}
const duck = new Bird('Duck', 'quack');