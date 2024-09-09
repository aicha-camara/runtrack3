function sort(numbers, order) {
    let n = numbers.length; 
    let succes; 

    do {
        succes = false;
        if (order === "asc") {
            for (let i = 0; i < n - 1; i++) {
                if (numbers[i] > numbers[i + 1]) {
                    [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
                    succes = true;
                }
            }
        } else if (order === "desc") {
            for (let i = 0; i < n - 1; i++) {
                if (numbers[i] < numbers[i + 1]) {
                    [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
                    succes = true;
                }
            }
        } else {
            console.log("Ordre non reconnu. Utilisez 'asc' pour croissant ou 'desc' pour décroissant.");
            return; 
        }
        n--; 
    } while (succes); 

    return numbers; 
}

function tri(numbers, order) {
    
    if (order !== "asc" && order !== "desc") {
        console.log("L'ordre doit être 'asc' pour croissant ou 'desc' pour décroissant.");
        return;
    }
    return sort(numbers, order);
}

// Exemple d'utilisation
let tableau = [64, 34, 25, 12, 22, 11, 90];

console.log("Tableau trié en ordre croissant : ", tri(tableau, "asc")); // Utilisation de .slice() pour ne pas modifier le tableau original
console.log("Tableau trié en ordre décroissant : ", tri(tableau, "desc")); // Utilisation de .slice() pour ne pas modifier le tableau original
