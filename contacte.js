// ========================================
// 1. RÉCUPÉRER LES ÉLÉMENTS DU FORMULAIRE
// ========================================

const formCommande = document.getElementById("formCommande");
const messageForm = document.getElementById("messageForm");


// ========================================
// 2. NUMÉRO WHATSAPP D'IGAS CREATOR
// ========================================

// Remplace ce numéro par ton véritable numéro.
// Format : indicatif du pays suivi du numéro, sans + ni espaces.

const numeroWhatsApp = "25767356795!";


// ========================================
// 3. ENVOYER LA COMMANDE
// ========================================

formCommande.addEventListener("submit", function (event) {

    // Empêcher le rechargement de la page
    event.preventDefault();

    // Récupérer les informations du formulaire
    const nom = document.getElementById("nom").value.trim();

    const province = document.getElementById("province").value;

    const commune = document.getElementById("commune").value.trim();

    const telephone = document.getElementById("telephone").value.trim();

    const email = document.getElementById("email").value.trim();

    const service = document.getElementById("service").value;

    const description = document.getElementById("message").value.trim();


    // ========================================
    // 4. VÉRIFIER LES INFORMATIONS
    // ========================================

    if (
        nom === "" ||
        province === "" ||
        commune === "" ||
        telephone === "" ||
        email === "" ||
        service === "" ||
        description === ""
    ) {
        afficherMessage(
            "Veuillez remplir tous les champs du formulaire.",
            "erreur"
        );

        return;
    }


    // Vérifier la longueur du numéro de téléphone
    if (telephone.replace(/\D/g, "").length < 8) {

        afficherMessage(
            "Veuillez saisir un numéro de téléphone valide.",
            "erreur"
        );

        return;
    }


    // Vérifier le format de l'adresse e-mail
    const emailValide = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailValide.test(email)) {

        afficherMessage(
            "Veuillez saisir une adresse e-mail valide.",
            "erreur"
        );

        return;
    }


    // ========================================
    // 5. PRÉPARER LE MESSAGE WHATSAPP
    // ========================================

    const texteCommande = `
Bonjour IGAS CREATOR !

Je souhaite commander un service.

INFORMATIONS DU CLIENT

Nom complet : ${nom}

Province : ${province}

Commune : ${commune}

Téléphone : ${telephone}

Adresse e-mail : ${email}

SERVICE DEMANDÉ

${service}

DESCRIPTION DU PROJET

${description}

Merci de me contacter pour discuter de ma commande.
    `.trim();


    // ========================================
    // 6. CRÉER LE LIEN WHATSAPP
    // ========================================

    const messageEncode = encodeURIComponent(texteCommande);

    const lienWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${messageEncode}`;


    // ========================================
    // 7. OUVRIR WHATSAPP
    // ========================================

    afficherMessage(
        "Votre demande est préparée. WhatsApp va s'ouvrir pour vous permettre de l'envoyer.",
        "succes"
    );

    window.open(lienWhatsApp, "_blank", "noopener,noreferrer");

});


// ========================================
// 8. AFFICHER UN MESSAGE À L'UTILISATEUR
// ========================================

function afficherMessage(texte, type) {

    messageForm.textContent = texte;

    if (type === "erreur") {

        messageForm.style.color = "#CC0000";

    } else {

        messageForm.style.color = "#0056B3";

    }

    messageForm.style.marginTop = "15px";
    messageForm.style.fontWeight = "bold";

}
