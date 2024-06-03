/**
 * Erstellen Sie eine Liste aller Mitarbeiter in der "IT"-Abteilung, deren Gehalt bei 50000 oder darüber liegt. Zusätzlich sollen alle Vornamen in Grossbuchstaben umgewandelt und der Nachname entfernt werden (z.B. "MAX").
 */
class Mitarbeiter {
    constructor(name, abteilung, gehalt) {
        this.name = name;
        this.abteilung = abteilung;
        this.gehalt = gehalt;
    }
}

const mitarbeiter = [
    new Mitarbeiter("Max Mustermann", "IT", 50000),
    new Mitarbeiter("Erika Musterfrau", "Marketing", 45000),
    new Mitarbeiter("Klaus Klein", "IT", 55000),
    new Mitarbeiter("Julia Gross", "HR", 40000)
];

function filterAndTransformMitarbeiter(mitarbeiter) {
    return mitarbeiter
        .filter(m => m.abteilung === "IT" && m.gehalt >= 50000)
        .map(m => m.name.split(" ")[0].toUpperCase());
}

const result = filterAndTransformMitarbeiter(mitarbeiter);
console.log(result); // Ausgabe: ["MAX", "KLAUS"]

/**
 * Filtern Sie die Kursnamen, um nur diejenigen zu behalten, die das Wort "Daten" enthalten.
 * Entfernen Sie aus jedem Kursnamen alle Leerzeichen.
 * Sortieren Sie die Kursnamen alphabetisch.
 * Sortieren Sie umgekehrt alphabetisch.
 */

const kurse = [
    "Programmierung in Scala",
    "Datenbanken",
    "Webentwicklung mit JavaScript",
    "Algorithmen und Datenstrukturen"
];

function processKursNamen(kurse) {
    return kurse
        .filter(kurs => kurs.includes("Daten"))
        .map(kurs => kurs.replace(/\s+/g, ''))
        .sort()
        .reverse();
}

// Beispielaufruf
const result2 = processKursNamen(kurse);
console.log(result2); // Ausgabe: ["DatenstrukturenundAlgorithmen", "Datenbanken"]