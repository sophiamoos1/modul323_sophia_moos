// Funktion 1.1
function addToCart(cartItems, item) {
    return [...cartItems, item];
}

let currentCart = [];

currentCart = addToCart(currentCart, 'Apple');
console.log(currentCart); // Ausgabe: ['Apple']

currentCart = addToCart(currentCart, 'Banana');
console.log(currentCart); // Ausgabe: ['Apple', 'Banana']

currentCart = addToCart(currentCart, 'Orange');
console.log(currentCart); // Ausgabe: ['Apple', 'Banana', 'Orange']

//Funktion 1.4
function multiplyWithRandom(number, randomValue) {
    return number * randomValue;
}

//bestimmter wert aber dann macht randomValue kein sinn
console.log(multiplyWithRandom(5, 0.5)); // Ausgabe: 2.5
console.log(multiplyWithRandom(10, 0.8)); // Ausgabe: 8.0

//Mit random values im parameter
const randomValue1 = Math.random();
console.log(multiplyWithRandom(5, randomValue1));

const randomValue2 = Math.random();
console.log(multiplyWithRandom(10, randomValue2));

//Funktion 1.6

function returnString(str) {
    return str;
}

console.log(returnString("Hello")); // Ausgabe: Hello