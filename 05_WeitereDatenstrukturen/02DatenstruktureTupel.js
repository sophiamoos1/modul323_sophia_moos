/**
 * Schreiben Sie eine WetterFunktion, welches beim Aufruf drei Werte zurückgibt:
 *
 * eine Wetterbeschreibung (wie "sonnig", "regnerisch", etc.)
 * die aktuelle Zeit (verwenden Sie LocalTime)
 * die aktuelle Temperatur
 *
 * Verwenden Sie dabei eine Tupel, um diese Werte zu retournieren.
 */
function task1() {
    function wetterFunktion() {
        const wetterBeschreibung = "sonnig";

        const aktuelleZeit = new Date().toLocaleTimeString();

        const aktuelleTemperatur = "20°C";

        return [wetterBeschreibung, aktuelleZeit, aktuelleTemperatur];
    }

    const wetter = wetterFunktion();
    console.log(wetter); // Ausgabe: ["sonnig", "hh:mm:ss AM/PM", "20°C"]

    const [beschreibung, zeit, temperatur] = wetter;
    console.log(`Wetterbeschreibung: ${beschreibung}`); // Ausgabe: Wetterbeschreibung: sonnig
    console.log(`Aktuelle Zeit: ${zeit}`); // Ausgabe: Aktuelle Zeit: hh:mm:ss AM/PM
    console.log(`Aktuelle Temperatur: ${temperatur}`); // Ausgabe: Aktuelle Temperatur: 20°C
}
console.log("TASK 1:")
task1()
console.log("\n")

/**
 * Erstellen Sie eine Liste mit Wetterdaten (wiederum als Tupel). Implementieren Sie eine Funktion, welche die Daten ausliest und nach bestimmten Kriterien wieder ausgibt. (z.Bsp. sollen alle Städte angezeigt werden, die wärmer als 20 Grad haben)
 */

function task2() {
    const wetterDaten = [
        ["Berlin", "sonnig", 22],
        ["Hamburg", "regnerisch", 18],
        ["München", "bewölkt", 24],
        ["Köln", "sonnig", 21],
        ["Frankfurt", "regnerisch", 19]
    ];

    function stadtWärmerAls(wetterDaten, temperaturGrenze) {
        return wetterDaten
            .filter(([stadt, beschreibung, temperatur]) => temperatur > temperaturGrenze)
            .map(([stadt, beschreibung, temperatur]) => stadt);
    }

    const warmeStädte = stadtWärmerAls(wetterDaten, 20);
    console.log(warmeStädte); // Ausgabe: ["Berlin", "München", "Köln"]
}
console.log("TASK 2:")
task2()
console.log("\n")

/**
 * Wir wollen eine Funktion trending, welche eine Liste von Kurswerten entgegennimmt (z.Bsp. von einer bestimmten Aktie). Dabei soll errechnet werden, ob der Kurs einem Trend folgt oder nicht (d.h. wenn der Kurs laufend höher wird, dann haben wir einen positiven Trend).
 * Beispiel Aufruf:
 * trending(List(BigDecimal(1), BigDecimal(4), BigDecimal(3), BigDecimal(8))) ergibt false
 * trending(List(BigDecimal(1), BigDecimal(2), BigDecimal(3), BigDecimal(8))) ergibt true
 * Lösungsansatz:
 * Verwenden Sie die zip-Funktion, um einen Tupel von zwei Werten zu bilden.
 * Die zip-Funktion nimmt die Liste und zipped sie mit sich selbst (ohne das erste Element):
 * rates.zip(rates.drop(1))
 * Somit wird das erste Element mit dem zweiten Element "gezipped", das Zweite mit dem Dritten und soweiter. Wir erhalten eine Liste von 2er-Tupel, mit jeweils dem vorherigen Wert und dem aktuellen Wert.
 * Wenden Sie für jeden Tupel das Pattern Matching an (d.h. aktueller Wert > vorheriger Wert).
 */

function task3() {
    function trending(rates) {
        if (rates.length <= 1) {
            return true;
        }

        const zipped = rates.slice(0, -1).map((rate, index) => [rate, rates[index + 1]]);

        return zipped.every(([previous, current]) => current > previous);
    }

    console.log(trending([1, 4, 3, 8])); // Ausgabe: false
    console.log(trending([1, 2, 3, 8])); // Ausgabe: true
}
console.log("TASK 3:")
task3()
