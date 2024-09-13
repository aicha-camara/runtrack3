<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <title>Document</title>
</head>
<body>
    <class="container">
    <button id="shuffle-button">Mélanger les pièces</button>
    <section id="puzzle-container">
    <div class="puzzle-piece" id="piece1" data-correct-position="1"></div>
    <div class="puzzle-piece" id="piece2" data-correct-position="2"></div>
    <div class="puzzle-piece" id="piece3" data-correct-position="3"></div>
    <div class="puzzle-piece" id="piece4" data-correct-position="4"></div>
    <div class="puzzle-piece" id="piece5" data-correct-position="5"></div>
    <div class="puzzle-piece" id="piece6" data-correct-position="6"></div>
</section>

    <section id="game-container"> </section>
    <button id="check-button">Vérifier la solution</button>
            <p id="result-message"></p>
    </main>  

    <script src="script.js"></script> 
</body>
</html>
