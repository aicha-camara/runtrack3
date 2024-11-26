document.addEventListener('DOMContentLoaded', () => {
    fetch('user.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des données.');
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                console.error(data.error);
                return;
            }
            displayResults(data);
        })
        .catch(error => {
            console.error('Erreur lors de la requête Fetch :', error);
        });
});

function displayResults(data) {
    const tableBody = document.querySelector('#userTable tbody');
    tableBody.innerHTML = '';

    if (data.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="3">Aucun utilisateur trouvé.</td></tr>';
        return;
    }

    data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.nom}</td>
            <td>${user.prenom}</td>
            <td>${user.email}</td>
        `;
        tableBody.appendChild(row);
    });
}
