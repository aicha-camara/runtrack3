document.addEventListener('DOMContentLoaded', function() {
    function showhide() {
        let article = document.getElementById('citation');

        if (article.textContent.trim() === '') {
            article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        } else {
            article.textContent = '';
        }
    }

    document.getElementById('button').addEventListener('click', showhide);
});
