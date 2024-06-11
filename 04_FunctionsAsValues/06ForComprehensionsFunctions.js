/**
 * Schreiben Sie eine for-Comprehension, die eine Liste von Ganzzahlen von 1 bis 10 durchläuft und jede Zahl quadriert.
 * Tipp: Sie können Zahlenlisten ganz einfach so generieren: val numbers = 1 to 10
 */


const numbers1 = Array.from({ length: 10 }, (_, i) => i + 1);

function squareNumbers(numbers) {
    return numbers.map(number => number * number);
}

const result1 = squareNumbers(numbers1);
console.log(result1); // Ausgabe: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

/**
 * Schreiben Sie eine for-Comprehension, die eine Liste von Ganzzahlen von 1 bis 20 durchläuft und nur die geraden Zahlen auswählt.
 */

const numbers2 = Array.from({ length: 20 }, (_, i) => i + 1);

function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

const result2 = filterEvenNumbers(numbers2);
console.log(result2); // Ausgabe: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

/**
 * Gegeben sind zwei Listen von Strings: colors und fruits. Schreiben Sie eine for-Comprehension, die alle möglichen Paare aus einer Farbe und einer Frucht generiert.
 *
 * val colors = List("Red", "Green", "Blue")
 * val fruits = List("Apple", "Banana", "Orange")
 */

const colors = ["Red", "Green", "Blue"];
const fruits = ["Apple", "Banana", "Orange"];

function generateColorFruitPairs(colors, fruits) {
    return colors.flatMap(color => fruits.map(fruit => [color, fruit]));
}

const result3 = generateColorFruitPairs(colors, fruits);
console.log(result3);
// Ausgabe:
// [
//   ["Red", "Apple"],
//   ["Red", "Banana"],
//   ["Red", "Orange"],
//   ["Green", "Apple"],
//   ["Green", "Banana"],
//   ["Green", "Orange"],
//   ["Blue", "Apple"],
//   ["Blue", "Banana"],
//   ["Blue", "Orange"]
// ]

/**
 * Gegeben sind zwei Listen von Benutzern (users) und deren Aufgaben (tasks). Jeder Benutzer hat eine Liste von Aufgaben. Schreiben Sie eine for-Comprehension, die alle Kombinationen von Benutzer und Aufgabe anzeigt, aber nur diejenigen, bei denen die Aufgabe nicht abgeschlossen ist.
 */

class User {
    constructor(name, tasks) {
        this.name = name;
        this.tasks = tasks;
    }
}

const users = [
    new User("Alice", ["Task 1", "Task 2", "Task 3"]),
    new User("Bob", ["Task 1", "Task 4", "Task 5"]),
    new User("Charlie", ["Task 2", "Task 3", "Task 6"])
];

const tasksCompleted = ["Task 1", "Task 3", "Task 5"];

function findPendingTasks(users, tasksCompleted) {
    return users.flatMap(user =>
        user.tasks
            .filter(task => !tasksCompleted.includes(task))
            .map(task => ({ user: user.name, task }))
    );
}

const result4 = findPendingTasks(users, tasksCompleted);
console.log(result4);
// Ausgabe:
// [
//   { user: "Alice", task: "Task 2" },
//   { user: "Bob", task: "Task 4" },
//   { user: "Charlie", task: "Task 2" },
//   { user: "Charlie", task: "Task 6" }
// ]