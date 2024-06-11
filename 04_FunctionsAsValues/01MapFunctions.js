/**
 * Gegeben ist eine Liste von Zahlen: List(1, 2, 3, 4, 5). Wenden Sie die map-Funktion an, um jede Zahl zu verdoppeln.
 * @param numbers
 * @returns {*}
 */

function doubleNumbers(numbers) {
    return numbers.map(number => number * 2);
}

// Beispielaufruf
const numbers1 = [1, 2, 3, 4, 5];
const doubled = doubleNumbers(numbers1);
console.log(doubled); // Ausgabe: [2, 4, 6, 8, 10]

/**
 * Gegeben ist eine Liste von Namen: List("Alice", "Bob", "Charlie"). Verwenden Sie map, um jeden Namen in Grossbuchstaben umzuwandeln.
 */

function convertNamesToUpperCase(names) {
    return names.map(name => name.toUpperCase());
}

// Beispielaufruf
const names = ["Alice", "Bob", "Charlie"];
const upperCaseNames = convertNamesToUpperCase(names);
console.log(upperCaseNames); // Ausgabe: ["ALICE", "BOB", "CHARLIE"]

/**
 * Gegeben ist eine Liste von Zahlen: List(12, 45, 68, 100). Benutzen Sie map, um die Hälfte jeder Zahl zu berechnen.
 */

function halveNumbers(numbers) {
    return numbers.map(number => number / 2);
}

// Beispielaufruf
const numbers2 = [12, 45, 68, 100];
const halvedNumbers = halveNumbers(numbers2);
console.log(halvedNumbers); // Ausgabe: [6, 22.5, 34, 50]

/**
 * Verwenden Sie map, um eine Liste von formatierten Adressstrings zu erstellen (z.B. "Hauptstrasse 10, 12345 Musterstadt").
 */

class Adresse {
    constructor(strasse, hausnummer, postleitzahl, stadt) {
        this.strasse = strasse;
        this.hausnummer = hausnummer;
        this.postleitzahl = postleitzahl;
        this.stadt = stadt;
    }
}

const adressen = [
    new Adresse("Hauptstrasse", 10, "12345", "Musterstadt"),
    new Adresse("Nebenstrasse", 5, "23456", "Beispielburg")
];

function formatAdressen(adressen) {
    return adressen.map(adresse => `${adresse.strasse} ${adresse.hausnummer}, ${adresse.postleitzahl} ${adresse.stadt}`);
}

// Beispielaufruf
const formattedAdressen = formatAdressen(adressen);
console.log(formattedAdressen);
// Ausgabe: ["Hauptstrasse 10, 12345 Musterstadt", "Nebenstrasse 5, 23456 Beispielburg"]

/**
 * Verwenden Sie map, um eine Liste der Vornamen in Grossbuchstaben zu erstellen.
 */

const namen = ["Max Mustermann", "Erika Mustermann"];

function extractFirstNamesToUpperCase(names) {
    return names.map(name => name.split(" ")[0].toUpperCase());
}

// Beispielaufruf
const upperCaseFirstNames = extractFirstNamesToUpperCase(namen);
console.log(upperCaseFirstNames); // Ausgabe: ["MAX", "ERIKA"]