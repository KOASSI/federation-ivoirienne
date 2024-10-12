document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Merci " + name + ", votre message a été envoyé avec succès !");
        // Ici, tu peux ajouter un code pour envoyer les données vers un serveur.
    } else {
        alert("Veuillez remplir tous les champs du formulaire.");
    }
});
