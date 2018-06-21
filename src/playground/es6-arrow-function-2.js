//arguments object - no longer bound with arrow functions

const add = (a, b) => {
    return a + b;
};

console.log(add(55,22));

//this keyword - no longer bound with arrow functions

const user = {
    name: 'Bradley',
    cities: ['Baltimore', 'Santa Barbara'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

//Challenge

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 4,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplier.multiply());