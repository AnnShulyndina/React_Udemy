
//________Прототипы_______

//const animal выводит функцию say для cat и dog
const animal = {
    say: function () {
        console.log(this.name, 'goes', this.voice);
    }
};
const dog = {
    name: 'dog',
    voice: 'woof',
    };
//Object.setPrototypeOf делигирует say to const animal (animal это прототип dog)
Object.setPrototypeOf(dog, animal);
// Object.setPrototypeOf - лучше не использовтаь данный метод
dog.say();

//better next


function createAnimal(name, voice) {
    const result = Object.create(animal);
    result.name = name;
    result.voice = voice;
    return result;
}

const dog = createAnimal('dog', 'woof');
const cat = createAnimal('cat', 'meow');

dog.say();
cat.say();

//or

const dog = Object.create(animal);
dog.name = 'dog';
dog.voice = 'woof';
dog.say();


// const cat = {
//     name: 'cat',
//     voice: 'meow',
//     };
// Object.setPrototypeOf(cat, animal);
// dog.say();
// cat.say();

function Animal(name, voice) {
    this.name = name;
    this.voice = voice;
    }
Animal.prototype.say = function() {
    console.log(this.name, 'goes', this.voice);
};
const dog = new Animal('dog', 'woof');
const cat = new Animal('cat', 'meow');

dog.say();
cat.say();

//1. Object.setPrototypeOf
//2. Object.create
//3. using new
