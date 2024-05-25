document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signInForm');
    const emailOrPhoneInput = document.getElementById('emailOrPhone');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    
    // Remplir les champs si les informations d'identification sont déjà stockées
    if (localStorage.getItem('rememberMe') === 'true') {
        emailOrPhoneInput.value = localStorage.getItem('emailOrPhone');
        passwordInput.value = localStorage.getItem('password');
        rememberMeCheckbox.checked = true;
    }

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche l'envoi par défaut du formulaire

        // Récupérer la valeur du champ de mot de passe
        const password = passwordInput.value;

        // Vérifier si le mot de passe est valide
        if (password !== 'MW2lv' && password !== '281122' && password !== 'Ted3') {
            alert('Mot de passe invalide. Veuillez réessayer.'); // Afficher un message d'erreur si le mot de passe ne correspond à aucun des mots de passe spécifiés
        }
         else {
            // Enregistrer les informations d'identification si l'utilisateur a coché "Se souvenir de moi"
            if (rememberMeCheckbox.checked) {
                const emailOrPhone = emailOrPhoneInput.value;
                localStorage.setItem('emailOrPhone', emailOrPhone);
                localStorage.setItem('password', password); // Sauvegarder également le mot de passe
                localStorage.setItem('rememberMe', 'true');
            } else {
                // Sinon, effacer les informations d'identification stockées
                localStorage.removeItem('emailOrPhone');
                localStorage.removeItem('password'); // Effacer également le mot de passe
                localStorage.removeItem('rememberMe');
            }

            // Rediriger vers accueil.html si le mot de passe est valide
            window.location.href = 'acceuille.html';
        }
    });
});
function myFunction() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

