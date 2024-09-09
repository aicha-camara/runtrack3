function verification(num) {
    if (num <= 1) {
        return false; 
    } else if (num <= 3) {
        return true;  
    } else if (num % 2 === 0 || num % 3 === 0) {
        return false; 
    }

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

function sommenombrespremiers(num1, num2) {
    if (verification(num1) && verification(num2)) {
        let resultat = num1 + num2;
        console.log(`Les deux nombres ${num1} et ${num2} sont premiers, donc leur somme est : ${resultat}`);
    } else {
        console.log(`Les nombres ${num1} et ${num2} ne sont pas premiers.`);
    }
}


sommenombrespremiers(5, 7);  
sommenombrespremiers(17, 19); 
sommenombrespremiers(8, 15);
