<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pokemon</title>
</head>
<body>
    <form id="filterForm">
        <label for="id">ID :</label>
        <input type="text" id="id" name="id">
        <br>

        <label for="name">Nom :</label>
        <input type="text" id="name" name="name">
        <br>

        <label for="type">Type :</label>
        <select id="type" name="type">
            <option value="">Sélectionnez un type</option>
            <option value="Grass">Grass</option>
            <option value="Fire">Fire</option>
            <option value="Water">Water</option>
            <option value="Psychic">Psychic</option>
        </select>
        <br>

        <input type="button" id="filterButton" value="Filtrer">
    </form>

    <div id="result"></div>

    <script src="script.js"></script>
</body>
</html>
