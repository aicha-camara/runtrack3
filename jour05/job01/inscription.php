<?php
require_once "traitement_inscription.php"
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <link rel="stylesheet" href="./assets/style-inscription.css?v=<?php echo time(); ?>">
    <!-- Inclusion de jQuery -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <!-- Ton script après jQuery -->
    <script src="./script.js?v=<?php echo time(); ?>"></script>
<body>
    <header>
        <nav class="menu">
            <h1>Jour 05</h1>
            <ul>
                <li><a href="inscription.php">Inscription</a></li>
                <li><a href="connexion.php">Connexion</a></li>
            </ul>
        </nav>
    </header>
    
    <main class="container">
        <h2>Créer un compte</h2>
        <section id="formulaire_inscription">
            <form action="traitement_inscription.php" method="POST" onsubmit="return validateInscription()">
                
                <label for="prenom">Prénom : </label>
                <input type="text" id="prenom" name="prenom" placeholder="Prénom..." required>
                <p id="error-prenom" class="error-message"></p>
                
                <label for="nom">Nom : </label>
                <input type="text" id="nom" name="nom" placeholder="Nom..." required>
                <p id="error-nom" class="error-message"></p>
                
                <label for="email">Email : </label>
                <input type="email" id="email" name="email" placeholder="Email..." required>
                <p id="error-email" class="error-message"></p>
                
                <label for="password">Mot de passe : </label>
                <input type="password" id="password" name="password" placeholder="Mot de passe..." required>
                <p id="error-password" class="error-message"></p>
                
                <label for="confirm_password">Confirmer le mot de passe : </label>
                <input type="password" id="confirm_password" name="confirm_password" placeholder="Confirmer le mot de passe..." required>
                <p id="error-confirm_password" class="error-message"></p>

                <button type="submit" id="inscription">S'inscrire</button>
            </form>
        </section>
    </main>
    
    <footer>
    </footer>

</body>
</html>
