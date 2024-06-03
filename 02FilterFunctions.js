/**
 * Gegeben ist eine Liste von Zahlen: List(1, 2, 3, 4, 5). Wenden Sie die filter-Funktion an, um nur die geraden Zahlen zu behalten.
 * @param numbers
 * @returns {*}
 */
function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

// Beispielaufruf
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = filterEvenNumbers(numbers);
console.log(evenNumbers); // Ausgabe: [2, 4]

/**
 * Gegeben ist eine Liste von Namen: List("Alice", "Bob", "Charlie", "Diana"). Verwenden Sie filter, um Namen auszuwählen, die mehr als vier Buchstaben haben.
 */

function filterLongNames(names) {
    return names.filter(name => name.length > 4);
}

// Beispielaufruf
const names = ["Alice", "Bob", "Charlie", "Diana"];
const longNames = filterLongNames(names);
console.log(longNames); // Ausgabe: ["Alice", "Charlie", "Diana"]

/**
 * Gegeben ist eine Liste von Zahlen: List(12, 45, 68, 100). Benutzen Sie filter, um alle Zahlen zu behalten, die grösser als 50 sind.
 */

function filterNumbersGreaterThanFifty(numbers) {
    return numbers.filter(number => number > 50);
}

// Beispielaufruf
const numbers2 = [12, 45, 68, 100];
const filteredNumbers = filterNumbersGreaterThanFifty(numbers2);
console.log(filteredNumbers); // Ausgabe: [68, 100]

/**
 * Gegeben ist eine Liste von Wörtern: List("Scala", "ist", "fantastisch"). Verwenden Sie filter, um alle Wörter zu behalten, die mit "S" beginnen.
 */
function filterWordsStartingWithS(words) {
    return words.filter(word => word.startsWith("S"));
}

// Beispielaufruf
const words = ["Scala", "ist", "fantastisch"];
const wordsStartingWithS = filterWordsStartingWithS(words);
console.log(wordsStartingWithS); // Ausgabe: ["Scala"]

/**
 * Verwenden Sie filter und map, um eine Liste der Titel aller Bücher zu erstellen, die vor 1950 veröffentlicht wurden.
 */

class Buch {
    constructor(titel, autor, jahr) {
        this.titel = titel;
        this.autor = autor;
        this.jahr = jahr;
    }
}

const buecher = [
    new Buch("1984", "George Orwell", 1949),
    new Buch("Brave New World", "Aldous Huxley", 1932),
    new Buch("Fahrenheit 451", "Ray Bradbury", 1953)
];

function filterAndMapBuecher(buecher) {
    return buecher
        .filter(buch => buch.jahr < 1950)
        .map(buch => buch.titel);
}

// Beispielaufruf
const filteredTitles = filterAndMapBuecher(buecher);
console.log(filteredTitles); // Ausgabe: ["1984", "Brave New World"]