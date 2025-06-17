
//fomile
function validerFormulaire() {
    let prenom = document.getElementById("prenom");
    let nom = document.getElementById("nom");
    let sujet = document.getElementById("sujet");
    let Email = document.getElementById("Email");
    let description = document.getElementById("description");

   
    prenom.style.border = "";
    nom.style.border = "";
    sujet.style.border = "";
    Email.style.border = "";
    description.style.border = "";

  
    let valide = true;

    if (prenom.value.trim() === "") {
      prenom.style.border = "2px solid red";
      valide = false;
    }
    if (nom.value.trim() === "") {
      nom.style.border = "2px solid red";
      valide = false;
    }
    if (sujet.value.trim() === "") {
      sujet.style.border = "2px solid red";
      valide = false;
    }
    if (Email.value.trim() === "") {
      Email.style.border = "2px solid red";
      valide = false;
    } else {
        const verify = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!verify.test(Email.value.trim())) {
            Email.style.border = "2px solid red";
            alert("Adresse e-mail invalide !");
            return false;
        }
    }

    if (description.value.trim() === "") {
      description.style.border = "2px solid red";
      valide = false;
    }

    if (!valide) {
      alert("Veuillez remplir tous les champs !");
    } else {
      alert("Merci ! Votre message a été envoyé");
    }

    return valide; 
}
