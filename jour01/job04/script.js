function bisextile(annee) {
    
    if ((annee % 4 === 0 && annee % 100 !== 0) || (annee % 400 === 0)) {
        console.log("L'année est bissextile");
    } else {
        console.log("L'année : ",annee," n'est pas bissextile");
    }
}

bisextile(1900);
