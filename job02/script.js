function jsonValueKey(jsonString, key) {
    let jsonObject = JSON.parse(jsonString);

    return jsonObject[key];
}

let jsonString = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

let key = "city";
let value = jsonValueKey(jsonString, key);
console.log(value); 