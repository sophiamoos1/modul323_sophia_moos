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
task1()

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
task2()
