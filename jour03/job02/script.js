// Tableau d'images pour chaque pièce
const images = {
    piece1: 'assets/arc1.png',
    piece2: 'assets/arc2.png',
    piece3: 'assets/arc3.png',
    piece4: 'assets/arc4.png',
    piece5: 'assets/arc5.png',
    piece6: 'assets/arc6.png',
};

$(document).ready(function() {
    // Ajouter les images aux pièces du puzzle lors du chargement
    $('.puzzle-piece').each(function() {
        const pieceId = $(this).attr('id'); // Récupère l'id de la pièce
        const imgSrc = images[pieceId];     // Trouve l'image correspondante
        $(this).append(`<img src="${imgSrc}" alt="Puzzle ${pieceId}">`); // Ajoute l'image à la pièce
    });

    // Définir les événements de dragstart pour les pièces du puzzle
    $('.puzzle-piece').on('dragstart', function(event) {
        // Stocker l'id de l'élément qui est glissé
        event.originalEvent.dataTransfer.setData('text/plain', $(this).attr('id'));
    });

    // Définir les événements de dragover pour la zone de dépôt
    $('#game-container').on('dragover', function(event) {
        // Prévenir le comportement par défaut pour autoriser le dépôt
        event.preventDefault();
    });

    // Définir les événements de drop pour la zone de dépôt
    $('#game-container').on('drop', function(event) {
        // Prévenir le comportement par défaut
        event.preventDefault();

        // Récupérer l'id de l'élément qui est glissé
        const id = event.originalEvent.dataTransfer.getData('text/plain');

        // Trouver l'élément correspondant
        const piece = document.getElementById(id);

        // Ajouter l'image à la zone de dépôt
        $('#game-container').append(piece);

        // Optionnel: Modifier les styles ou actions après le dépôt
        $(piece).css({
            'position': 'relative',
            'top': '0',
            'left': '0'
        });
    });

    // Mélanger les pièces au début du jeu
    function shufflePieces() {
        const pieces = $('#puzzle-container .puzzle-piece');
        const container = $('#puzzle-container');

        // Convertir les pièces en tableau et mélanger l'ordre
        const piecesArray = pieces.toArray();
        for (let i = piecesArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            container.append(piecesArray[j]); // Déplacer la pièce à une nouvelle position
        }
    }

    // Ajouter un événement de clic au bouton de mélange
    $('#shuffle-button').click(function() {
        shufflePieces();
    });

    // Initialement mélanger les pièces
    shufflePieces();
    $('#check-button').click(function() {
        let isSolved = true;
        $('.puzzle-piece').each(function() {
            const correctPosition = $(this).data('correct-position');
            const currentPosition = $(this).index() + 1;
            if (correctPosition !== currentPosition) {
                isSolved = false;
            }
        });

        if (isSolved) {
            $('#result-message').text('Vous avez gagné').css('color', 'green');
        } else {
            $('#result-message').text('Vous avez perdu').css('color', 'red');
        }
    });
});
