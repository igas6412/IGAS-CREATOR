// ======================================
// CONFIGURATION WHATSAPP
// ======================================

// Remplace par TON numéro WhatsApp.
const numeroWhatsApp = "25767356795";


// ======================================
// FORMULAIRE DE COMMANDE
// ======================================

const formCommande = document.getElementById("formCommande");

const messageForm = document.getElementById("messageForm");


if (formCommande) {

    formCommande.addEventListener("submit", function (event) {

        event.preventDefault();

        // Récupérer les informations
        const nom = document.getElementById("nom").value.trim();

        const province = document.getElementById("province").value.trim();

        const commune = document.getElementById("commune").value.trim();

        const telephone = document.getElementById("telephone").value.trim();

        const email = document.getElementById("email").value.trim();

        const service = document.getElementById("service").value;

        const description = document.getElementById("message").value.trim();


        // Vérifier les champs
        if (
            !nom ||
            !province ||
            !commune ||
            !telephone ||
            !email ||
            !service ||
            !description
        ) {

            alert("Veuillez remplir tous les champs.");

            return;
        }


        // Préparer la commande
        const commande = `
Bonjour IGAS CREATOR !

Je souhaite commander un service.

NOM : ${nom}

PROVINCE : ${province}

COMMUNE : ${commune}

TÉLÉPHONE : ${telephone}

EMAIL : ${email}

SERVICE : ${service}

DESCRIPTION DU PROJET :
${description}

Merci de me contacter pour discuter de ma commande.
        `.trim();


        // Préparer le lien WhatsApp
        const url =
            "https://wa.me/" +
            numeroWhatsApp +
            "?text=" +
            encodeURIComponent(commande);


        // Ouvrir WhatsApp
        window.location.href = url;

    });

} else {

    console.error(
        "Erreur : le formulaire formCommande est introuvable dans le HTML."
    );

}
