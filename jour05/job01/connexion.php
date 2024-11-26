<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
    <script src="./script.js"></script>
    <link rel="stylesheet" href="./assets/style-connexion.css?v=<?php echo time(); ?>">
</head>
<body>
    <header>
        <nav class="menu">
            <h1>Jour 05</h1>
            <ul>
            <li><a href="inscription.php">Inscription</a></li>
            <li><a href="connexion.php">Connexion</a></li>
        </nav>
    </header>
    <main class="container">
     
    <section id="formulaire_connexion">
    
    <form action="traitement_connexion.php" method="POST" onsubmit="return validateConnexion()">     
        
        <label for="email">Email : </label>
        <input type="email" id="email" name="email" placeholder="Email..." required>
        
        <label for="motdepasse">Mots de passe : </label>
        <input type="password" id="password" name="password" placeholder="Mots de passe..." required>
        <p id="error-connexion" class="error-message"></p>
        
        <button type="submit" id="connexion">Se connecter</button>
    </form> 
    </section>
</main>
<footer></footer>
</body>
</html>