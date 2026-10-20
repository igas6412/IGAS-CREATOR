// ==================================================
// IGAS CREATOR - JAVASCRIPT COMPLET
// Formulaire de commande et réseaux sociaux
// ==================================================

document.addEventListener("DOMContentLoaded", function () {

    // ================================================
    // 1. CONFIGURATION
    // ================================================

    // Remplace par ton vrai numéro WhatsApp
    // Format Burundi : 257XXXXXXXX, sans + ni espaces
    const numeroWhatsApp = "25779000000";

    // Remplace par les liens de TES profils
    const lienFacebook = "https://www.facebook.com/";
    const lienInstagram = "https://www.instagram.com/";
    const lienTikTok = "https://www.tiktok.com/";

    // ================================================
    // 2. RÉCUPÉRER LE FORMULAIRE
    // ================================================

    const formCommande = document.getElementById("formCommande");
    const messageForm = document.getElementById("messageForm");

    // ================================================
    // 3. FONCTION POUR AFFICHER UN MESSAGE
    // ================================================

    function afficherMessage(texte, type) {

        if (messageForm) {
            messageForm.textContent = texte;
            messageForm.className = type;
        } else {
            alert(texte);
        }
    }

    // ================================================
    // 4. GÉRER LE FORMULAIRE DE COMMANDE
    // ================================================

    if (formCommande) {

        formCommande.addEventListener("submit", function (event) {

            // Empêcher le rechargement de la page
            event.preventDefault();

            // Récupérer les informations
            const nom = document.getElementById("nom")?.value.trim() || "";

            const province =
                document.getElementById("province")?.value || "";

            const commune =
                document.getElementById("commune")?.value.trim() || "";

            const telephone =
                document.getElementById("telephone")?.value.trim() || "";

            const email =
                document.getElementById("email")?.value.trim() || "";

            const service =
                document.getElementById("service")?.value || "";

            const description =
                document.getElementById("message")?.value.trim() || "";

            // ============================================
            // 5. VÉRIFIER LES CHAMPS OBLIGATOIRES
            // ============================================

            if (
                nom === "" ||
                province === "" ||
                commune === "" ||
                telephone === "" ||
                email === "" ||
                service === ""
            ) {
                afficherMessage(
                    "Veuillez remplir tous les champs obligatoires.",
                    "erreur"
                );
                return;
            }

            // Vérifier le téléphone
            const telephoneNettoye =
                telephone.replace(/[\s()+-]/g, "");

            if (!/^\d{8,15}$/.test(telephoneNettoye)) {
                afficherMessage(
                    "Veuillez entrer un numéro de téléphone valide.",
                    "erreur"
                );
                return;
            }

            // Vérifier l'email
            const expressionEmail =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!expressionEmail.test(email)) {
                afficherMessage(
                    "Veuillez entrer une adresse email valide.",
                    "erreur"
                );
                return;
            }

            // ============================================
            // 6. PRÉPARER LE MESSAGE WHATSAPP
            // ============================================

            const texteCommande = `
Bonjour IGAS CREATOR !

Je souhaite commander un service.

===== INFORMATIONS DU CLIENT =====

Nom complet : ${nom}
Province : ${province}
Commune : ${commune}
Téléphone : ${telephone}
Email : ${email}

===== SERVICE DEMANDÉ =====

${service}

===== DESCRIPTION DU PROJET =====

${description || "Aucune description supplémentaire."}

Merci de me contacter pour discuter de mon projet.
            `.trim();

            // ============================================
            // 7. CRÉER LE LIEN WHATSAPP
            // ============================================

            const lienCommande =
                "https://wa.me/" +
                numeroWhatsApp +
                "?text=" +
                encodeURIComponent(texteCommande);

            // ============================================
            // 8. AFFICHER LA CONFIRMATION
            // ============================================

            afficherMessage(
                "Vos informations sont prêtes. Ouverture de WhatsApp...",
                "succes"
            );

            // Ouvrir WhatsApp
            window.location.href = lienCommande;

        });

    } else {

        console.warn(
            "Formulaire introuvable : vérifie id='formCommande' dans contacte.html."
        );

    }

    // ================================================
    // 9. CONFIGURER LES LIENS DES RÉSEAUX SOCIAUX
    // ================================================

    const boutonFacebook = document.getElementById("lienFacebook");
    const boutonInstagram = document.getElementById("lienInstagram");
    const boutonTikTok = document.getElementById("lienTikTok");
    const boutonWhatsApp = document.getElementById("lienWhatsApp");

    if (boutonFacebook) {
        boutonFacebook.href = lienFacebook;
        boutonFacebook.target = "_blank";
        boutonFacebook.rel = "noopener noreferrer";
    }

    if (boutonInstagram) {
        boutonInstagram.href = lienInstagram;
        boutonInstagram.target = "_blank";
        boutonInstagram.rel = "noopener noreferrer";
    }

    if (boutonTikTok) {
        boutonTikTok.href = lienTikTok;
        boutonTikTok.target = "_blank";
        boutonTikTok.rel = "noopener noreferrer";
    }

    if (boutonWhatsApp) {
        boutonWhatsApp.href = "https://wa.me/" + numeroWhatsApp;
        boutonWhatsApp.target = "_blank";
        boutonWhatsApp.rel = "noopener noreferrer";
    }

    // ================================================
    // 10. MESSAGE DE VÉRIFICATION
    // ================================================

    console.log("IGAS CREATOR : JavaScript chargé avec succès.");

});
