/**
 * Gegeben ist eine Liste von Zahlen: List(1, 2, 3, 4, 5). Berechnen Sie die Summe aller Zahlen mithilfe von foldLeft.
 */
const numbers = [1, 2, 3, 4, 5];

// Funktion zur Berechnung der Summe aller Zahlen mit reduce (entspricht foldLeft)
function sumWithReduce(numbers) {
    return numbers.reduce((acc, number) => acc + number, 0);
}

const result1 = sumWithReduce(numbers);
console.log(result1); // Ausgabe: 15

/**
 * Gegeben ist eine Liste von Strings: List("Hallo", " ", "Welt", "!"). Kombinieren Sie alle Strings zu einem einzigen String mithilfe von foldLeft.
 */
const strings = ["Hallo", " ", "Welt", "!"];

// Funktion zum Kombinieren aller Strings mit reduce (entspricht foldLeft)
function combineStringsWithReduce(strings) {
    return strings.reduce((acc, str) => acc + str, "");
}

const result2 = combineStringsWithReduce(strings);
console.log(result2); // Ausgabe: "Hallo Welt!"

/**
 * Gegeben ist eine Liste von Punkten in einem zweidimensionalen Raum.
 * val points = List((1, 3), (2, 5), (4, 8), (6, 2))
 * Jeder Punkt wird durch ein Tupel (x, y) repräsentiert, wobei x und y die Koordinaten des Punktes sind. Ihre Aufgabe ist es, den Schwerpunkt (den durchschnittlichen Punkt) aller Punkte in der Liste zu berechnen.
 */

const points = [
    [1, 3],
    [2, 5],
    [4, 8],
    [6, 2]
];

function calculateCentroid(points) {
    const total = points.reduce((acc, point) => {
        return [acc[0] + point[0], acc[1] + point[1]];
    }, [0, 0]);

    const count = points.length;
    return [total[0] / count, total[1] / count];
}

const centroid = calculateCentroid(points);
console.log(centroid); // Ausgabe: [3.25, 4.5]