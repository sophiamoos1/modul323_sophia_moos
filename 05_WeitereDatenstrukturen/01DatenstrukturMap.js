/**
 * Gegeben ist folgende Map val m1: Map[String, String]. Wie lautet die Zuweisung?
 * Wir wollen folgende Ausgabe:
 * Map("key" -> "value")
 */

function task1() {
    const m1 = new Map();
    m1.set("key", "value");

    console.log(m1); // Ausgabe: Map { 'key' => 'value' }

    function formatMap(map) {
        return `Map(${Array.from(map).map(([key, value]) => `"${key}" -> "${value}"`).join(", ")})`;
    }

    console.log(formatMap(m1)); // Ausgabe: Map("key" -> "value")
}
task1()

/**
 * Gegeben ist folgende Map val m2: Map[String, String]. Wir wollen die Map m1 aktualisieren mit einem neuen Wertepaar.
 * Wir wollen folgende Ausgabe:
 * Map("key" -> "value", "key2" -> "value2")
 */

function task2() {
    const m1 = new Map();
    m1.set("key", "value");

    const m2 = new Map();
    m2.set("key2", "value2");

    function updateMap(originalMap, newMap) {
        newMap.forEach((value, key) => {
            originalMap.set(key, value);
        });
    }

    updateMap(m1, m2);

    console.log(m1); // Ausgabe: Map { 'key' => 'value', 'key2' => 'value2' }

    function formatMap(map) {
        return `Map(${Array.from(map).map(([key, value]) => `"${key}" -> "${value}"`).join(", ")})`;
    }

    console.log(formatMap(m1)); // Ausgabe: Map("key" -> "value", "key2" -> "value2")
}
task2()

/**
 * Gegeben ist folgende Map val m3: Map[String, String]. Wir wollen die Map m2 aktualisieren mit einem neuen Wert.
 * Wir wollen folgende Ausgabe:
 * Map("key" -> "value", "key2" -> "aDifferentValue")
 */

function task3() {
    const m1 = new Map();
    m1.set("key", "value");

    const m2 = new Map();
    m2.set("key2", "value2");

    m2.set("key2", "aDifferentValue");

    function updateMap(originalMap, newMap) {
        newMap.forEach((value, key) => {
            originalMap.set(key, value);
        });
    }

    updateMap(m1, m2);

    console.log(m1); // Ausgabe: Map { 'key' => 'value', 'key2' => 'aDifferentValue' }

    function formatMap(map) {
        return `Map(${Array.from(map).map(([key, value]) => `"${key}" -> "${value}"`).join(", ")})`;
    }

    console.log(formatMap(m1)); // Ausgabe: Map("key" -> "value", "key2" -> "aDifferentValue")
}
task3()

/**
 * Gegeben ist die Map val m4: Map[String, String]. Wir wollen die Map m3 aktualisieren und den key entfernen.
 * Wir wollen folgende Ausgabe:
 * Map("key2" -> "aDifferentValue")
 */

function task4() {
    const m1 = new Map();
    m1.set("key", "value");

    const m2 = new Map();
    m2.set("key2", "value2");

    m2.set("key2", "aDifferentValue");

    function updateMap(originalMap, newMap) {
        newMap.forEach((value, key) => {
            originalMap.set(key, value);
        });
    }

    updateMap(m1, m2);

    console.log(m1); // Ausgabe: Map { 'key' => 'value', 'key2' => 'aDifferentValue' }

    function formatMap(map) {
        return `Map(${Array.from(map).map(([key, value]) => `"${key}" -> "${value}"`).join(", ")})`;
    }

    console.log(formatMap(m1)); // Ausgabe: Map("key" -> "value", "key2" -> "aDifferentValue")
}
task4()

/**
 * Wir wollen den Wert aus key von m3: val valueFromM3: Option[String]
 * Wir wollen folgende Ausgabe:
 * Some("value")
 */

function task5() {
    const m3 = new Map();
    m3.set("key", "value");
    m3.set("key2", "aDifferentValue");

    function getValueFromMap(map, key) {
        if (map.has(key)) {
            return `Some("${map.get(key)}")`;
        } else {
            return `None`;
        }
    }

    const valueFromM3 = getValueFromMap(m3, "key");

    console.log(valueFromM3); // Ausgabe: Some("value")
}
task5()

/**
 * Wir wollen den Wert aus key von m3: val valueFromM4: Option[String], wobei wir somit keinen Wert erhalten, weil der key nicht existiert.
 * Die Ausgabe wäre somit:
 * None
 */

function task6() {
    const m4 = new Map();
    m4.set("key2", "aDifferentValue");

    function getValueFromMap(map, key) {
        if (map.has(key)) {
            return `Some("${map.get(key)}")`;
        } else {
            return `None`;
        }
    }

    const valueFromM4 = getValueFromMap(m4, "key");

    console.log(valueFromM4); // Ausgabe: None
}
task6()