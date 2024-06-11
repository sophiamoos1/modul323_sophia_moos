/**
 * Gegeben ist eine Liste von Listen, die Zahlen enthält: List(List(1, 2), List(3, 4), List(5, 6)). Ihre Aufgabe ist es, eine neue Liste zu erstellen, die alle Elemente der Unterlisten enthält, wobei jede Zahl verdoppelt wird. Verwenden Sie dazu die flatMap-Funktion in Kombination mit map.
 */
const lists = [
    [1, 2],
    [3, 4],
    [5, 6]
];

function doubleAndFlattenLists(lists) {
    return lists.flatMap(sublist => sublist.map(number => number * 2));
}

const result1 = doubleAndFlattenLists(lists);
console.log(result1); // Ausgabe: [2, 4, 6, 8, 10, 12]

/**
 * Gegeben ist eine Liste von Personen, wobei jede Person durch ein Tupel aus Name und einer Liste ihrer Lieblingsfarben dargestellt wird: List(("Max", List("Blau", "Grün")), ("Anna", List("Rot")), ("Julia", List("Gelb", "Blau", "Grün"))). Ihre Aufgabe ist es, eine Liste aller einzigartigen Farben zu erstellen, die als Lieblingsfarben angegeben wurden. Verwenden Sie dafür die flatMap-Funktion, gefolgt von distinct.
 */

const personen = [
    ["Max", ["Blau", "Grün"]],
    ["Anna", ["Rot"]],
    ["Julia", ["Gelb", "Blau", "Grün"]]
];

function getUniqueColors(personen) {
    const allColors = personen.flatMap(person => person[1]);
    const uniqueColors = [...new Set(allColors)];
    return uniqueColors;
}

const result2 = getUniqueColors(personen);
console.log(result2); // Ausgabe: ["Blau", "Grün", "Rot", "Gelb"]