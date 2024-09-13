document.getElementById('filterButton').addEventListener('click', () => {
    const id = document.getElementById('id').value.trim();
    const name = document.getElementById('name').value.trim();
    const type = document.getElementById('type').value.trim();

    fetch('pokemon.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Le fichier pokemon.json n\'a pas pu être chargé.');
        }
        return response.json();
    })
    .then(data => {
        let filteredData = data.filter(pokemon => {
            if (id && pokemon.id != id) return false;
            if (name && !pokemon.name.english.toLowerCase().includes(name.toLowerCase())) return false;
            if (type && !pokemon.type.includes(type)) return false;
            return true;
        });

        displayResults(filteredData);
    })
    .catch(error => {
        console.error('Erreur lors du chargement du fichier JSON : ', error);
    });
});

function displayResults(data) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (data.length === 0) {
        resultDiv.textContent = 'Aucun résultat trouvé.';
        return;
    }

    const ul = document.createElement('ul');
    data.forEach(pokemon => {
        const li = document.createElement('li');
        li.textContent = `${pokemon.name.english} (${pokemon.type.join(', ')})`;
        ul.appendChild(li);
    });
    resultDiv.appendChild(ul);
}
