<?php
$host = 'localhost';  
$db = 'utilisateurs';
$user = 'root';        
$pass = '';          

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

$query = $pdo->prepare("SELECT nom, prenom, email FROM utilisateurs");
$query->execute();

$users = $query->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');

echo json_encode($users);
?>
