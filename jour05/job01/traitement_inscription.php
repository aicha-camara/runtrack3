<?php
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $prenom = htmlspecialchars(trim($_POST['prenom']));
    $nom = htmlspecialchars(trim($_POST['nom']));
    $email = htmlspecialchars(trim($_POST['email']));
    $password = trim($_POST['password']); // Ne pas hacher encore ici

    // Validation de l'email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Vérification si l'email existe déjà
        $stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = :email");
        $stmt->bindParam(':email', $email);
        $stmt->execute();

        if ($stmt->rowCount() > 0) {
            echo "Email déjà utilisé.";
        } else {
            // Hachage du mot de passe
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
            
            // Insertion dans la base de données
            $stmt = $pdo->prepare("INSERT INTO utilisateurs (prenom, nom, email, password) VALUES (:prenom, :nom, :email, :password)");
            $stmt->bindParam(':prenom', $prenom);
            $stmt->bindParam(':nom', $nom);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':password', $hashedPassword);
            
            // Exécution de la requête d'insertion
            if ($stmt->execute()) {
                // Rediriger vers la page de connexion après une inscription réussie
                header('Location: connexion.php');
                exit(); // Toujours appeler exit() après header()
            } else {
                echo "Inscription échouée.";
            }
            
}}}
?>
