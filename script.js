document.addEventListener('DOMContentLoaded', function() {
    // Séquence du code Konami : [↑, ↑, ↓, ↓, ←, →, ←, →, B, A]
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;

    document.addEventListener('keydown', function(event) {
        // Vérifier si la touche pressée correspond à celle du code Konami
        if (event.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            // Si toute la séquence est correcte
            if (konamiIndex === konamiCode.length) {
                activateKonamiStyle();
                konamiIndex = 0; // Réinitialiser l'index pour permettre de refaire le code
            }
        } else {
            konamiIndex = 0; // Réinitialiser si la séquence est incorrecte
        }
    });

    // Fonction pour appliquer le style Konami
    function activateKonamiStyle() {
        document.body.classList.add('konami-active');
        console.log('Konami Code Activated!');
    }
});
