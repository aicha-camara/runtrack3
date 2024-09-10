document.addEventListener('DOMContentLoaded', function() {
    function showhide() {
        let existingArticle = document.getElementById('citation');

        if (existingArticle) {
            existingArticle.remove();
        } else {
            let article = document.createElement('article');
            article.id = 'citation'; 
            article.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
            
            document.body.appendChild(article);
        }
    }

    document.getElementById('button').addEventListener('click', showhide);
});
