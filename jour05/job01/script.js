$(document).ready(function() {
    function validateConnexion() {
        const email = document.getElementById('email').value.trim(); // Utilisation de trim()
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
        if (!emailRegex.test(email)) {
            return false; 
        }
    
        const password = document.getElementById('password').value.trim(); // Utilisation de trim()
        if (password.length < 10) {   
            return false;
        }
        
        return true;
    }
    

    function validateInscription() {
        let isValid = true;

        const prenom = $('#prenom').val().trim();
        const nom = $('#nom').val().trim();
        const email = $('#email').val().trim();
        const password = $('#password').val();
        const confirmPassword = $('#confirm_password').val();

        // Validation du prénom
        if (prenom === '') {
            $('#error-prenom').text("Le prénom est requis.");
            isValid = false;
        } else {
            $('#error-prenom').text("");
        }

        // Validation du nom
        if (nom === '') {
            $('#error-nom').text("Le nom est requis.");
            isValid = false;
        } else {
            $('#error-nom').text("");
        }

        // Validation de l'email
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            $('#error-email').text("Email invalide.");
            isValid = false;
        } else {
            $('#error-email').text("");
        }

        // Validation du mot de passe
        if (password.length < 10) {
            $('#error-password').text("Le mot de passe doit contenir au moins 10 caractères.");
            isValid = false;
        } else {
            $('#error-password').text("");
        }

        // Confirmation du mot de passe
        if (password !== confirmPassword) {
            $('#error-confirm_password').text("Les mots de passe ne correspondent pas.");
            isValid = false;
        } else {
            $('#error-confirm_password').text("");
        }

        return isValid;
    }

    // Attacher l'événement de validation au formulaire
    $('#formulaire_inscription form').on('submit', function(e) {
        if (!validateInscription()) {
            e.preventDefault();
        }
    });
});