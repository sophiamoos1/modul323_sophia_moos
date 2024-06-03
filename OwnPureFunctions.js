/*
Aufgabe 3.1: Eine Funktion, die aus einer Liste von Zahlen die Summe aller Listenelemente berechnet.
 */
function task1() {
    function sumRecursive(numbers) {
        if (numbers.length === 0) {
            return 0;
        }

        return numbers[0] + sumRecursive(numbers.slice(1));
    }

    // Beispielaufrufe
    const numbers = [1, 2, 3, 4, 5];
    const emptyNumbers = [];
    const result = sumRecursive(numbers);
    const emptyResult = sumRecursive(emptyNumbers)
    console.log(result); // Ausgabe: 15
    console.log(emptyResult) //Ausgabe: 0
}

/*
Aufgabe 3.2: Eine Funktion, die aus einer Liste von Zahlen den Mittelwert aller Listenelemente berechnet.
 */

function task2() {
    function averageRecursive(numbers) {
        function sumRecursive(nums) {
            if (nums.length === 0) {
                return 0;
            }
            return nums[0] + sumRecursive(nums.slice(1));
        }

        if (numbers.length === 0) {
            return 0;
        }

        const totalSum = sumRecursive(numbers);
        return totalSum / numbers.length;
    }

    // Beispielaufruf
    const numbers = [1, 2, 3, 4, 5];
    const result = averageRecursive(numbers);
    console.log(result); // Ausgabe: 3
}

/*
Aufgabe 3.3: Eine Funktion, die eine gegebene Liste von Strings alphabetisch sortiert.
 */
function task3() {
    function sortRecursive(strings) {
        if (strings.length <= 1) {
            return strings;
        }

        const pivot = strings[0];
        const left = [];
        const right = [];

        for (let i = 1; i < strings.length; i++) {
            if (strings[i] < pivot) {
                left.push(strings[i]);
            } else {
                right.push(strings[i]);
            }
        }

        return [...sortRecursive(left), pivot, ...sortRecursive(right)];
    }

    // Beispielaufruf
    const strings = ["banana", "apple", "orange", "mango"];
    const sortedStrings = sortRecursive(strings);
    console.log(sortedStrings); // Ausgabe: ["apple", "banana", "mango", "orange"]
}

/*
Aufgabe 3.4: Eine Funktion, die eine Liste von Objekten anhand einer eigenen Sort-Funktion sortiert. Die Objekte sollen dabei die Properties Datum, Priorität und Titel enthalten. Die Funktion soll eine sortierte Liste der Objekte zurückgeben, wobei als Sortierkriterium zuerst das Datum, dann die Priorität und zum Schluss der Titel verwendet werden.
 */

function task4() {
    function sortObjectsRecursive(objects) {
        function compare(obj1, obj2) {
            if (obj1.datum < obj2.datum) return -1;
            if (obj1.datum > obj2.datum) return 1;
            if (obj1.prioritaet < obj2.prioritaet) return -1;
            if (obj1.prioritaet > obj2.prioritaet) return 1;
            if (obj1.titel < obj2.titel) return -1;
            if (obj1.titel > obj2.titel) return 1;
            return 0;
        }

        if (objects.length <= 1) {
            return objects;
        }

        const pivot = objects[0];
        const left = [];
        const right = [];

        for (let i = 1; i < objects.length; i++) {
            if (compare(objects[i], pivot) < 0) {
                left.push(objects[i]);
            } else {
                right.push(objects[i]);
            }
        }

        return [...sortObjectsRecursive(left), pivot, ...sortObjectsRecursive(right)];
    }

// Beispielaufruf
    const objects = [
        { datum: '2024-06-01', prioritaet: 2, titel: 'B' },
        { datum: '2024-06-01', prioritaet: 1, titel: 'A' },
        { datum: '2024-05-31', prioritaet: 3, titel: 'C' },
        { datum: '2024-06-02', prioritaet: 2, titel: 'D' }
    ];
    const sortedObjects = sortObjectsRecursive(objects);
    console.log(sortedObjects);
// Ausgabe: [
//   { datum: '2024-05-31', prioritaet: 3, titel: 'C' },
//   { datum: '2024-06-01', prioritaet: 1, titel: 'A' },
//   { datum: '2024-06-01', prioritaet: 2, titel: 'B' },
//   { datum: '2024-06-02', prioritaet: 2, titel: 'D' }
// ]
}

/*
Aufgabe 3.5: Eine Funktion, die aus einer Baumstruktur mit unterschiedlich tiefer Verschachtelung alle Blätter (Elemente ohne weitere Kinder) ausliest und in einer flachen Liste von Blättern zurückgibt.
 */

function task5() {
    function extractLeaves(tree) {
        if (!tree) {
            return [];
        }

        if (!tree.children || tree.children.length === 0) {
            return [tree.value];
        }
        
        let leaves = [];
        for (let child of tree.children) {
            leaves = leaves.concat(extractLeaves(child));
        }
        return leaves;
    }

// Beispielaufruf
    const tree = {
        value: 1,
        children: [
            { value: 2, children: [] },
            { value: 3, children: [
                    { value: 4, children: [] },
                    { value: 5, children: [
                            { value: 6, children: [] }
                        ] }
                ] },
            { value: 7, children: [
                    { value: 8, children: [] }
                ] }
        ]
    };

    const leaves = extractLeaves(tree);
    console.log(leaves); // Ausgabe: [2, 4, 6, 8]
}

// Call aller Funktionen:
console.log("Aufgabe 3.1 Eine Funktion, die aus einer Liste von Zahlen die Summe aller Listenelemente berechnet.\n")
task1()
console.log("\n")
console.log("Aufgabe 3.2 Eine Funktion, die aus einer Liste von Zahlen den Mittelwert aller Listenelemente berechnet.\n")
task2()
console.log("\n")
console.log("Aufgabe 3.3 Eine Funktion, die eine gegebene Liste von Strings alphabetisch sortiert.\n")
task3()
console.log("\n")
console.log("Aufgabe 3.4 Eine Funktion, die eine Liste von Objekten anhand einer eigenen Sort-Funktion sortiert. Die Objekte sollen dabei die Properties Datum, Priorität und Titel enthalten. Die Funktion soll eine sortierte Liste der Objekte zurückgeben, wobei als Sortierkriterium zuerst das Datum, dann die Priorität und zum Schluss der Titel verwendet werden.\n")
task4()
console.log("\n")
console.log("Aufgabe 3.5 Eine Funktion, die aus einer Baumstruktur mit unterschiedlich tiefer Verschachtelung alle Blätter (Elemente ohne weitere Kinder) ausliest und in einer flachen Liste von Blättern zurückgibt.\n")
task5()