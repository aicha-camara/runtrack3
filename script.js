document.addEventListener('DOMContentLoaded', function() {
    function showhide() {
        // Sélectionner l'article avec l'ID 'citation'
        let article = document.getElementById('citation');

        // Vérifier si l'article contient déjà du texte
        if (article.textContent.trim() === '') {
            // Si l'article est vide, ajouter le texte
            article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        } else {
            // Si l'article a déjà du texte, le vider
            article.textContent = '';
        }
    }

    // Attacher l'événement 'click' au bouton pour appeler la fonction showhide
    document.getElementById('button').addEventListener('click', showhide);
});
