<?php
try
{
$mysqlClient = new PDO(
	'mysql:host=localhost;dbname=utilisateurs;charset=utf8',
	'root',
	'za9?-U5zwD4-6#L'
);
}
catch (Exception $e)
{
    die('Erreur :'. $e->getMessage());
}
?>