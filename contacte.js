// =====================================================
// IGAS CREATOR - CONTACT ET COMMANDE
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

    // =========================================
    // 1. CONFIGURATION
    // =========================================

    // Ton numéro WhatsApp
    const numeroWhatsApp = "25767356795";

    // Liens des réseaux sociaux
    // Remplace les liens généraux par ceux de tes profils.
    const lienFacebook = "https://www.facebook.com/";
    const lienInstagram = "https://www.instagram.com/";
    const lienTikTok = "https://www.tiktok.com/";

    // =========================================
    // 2. RÉCUPÉRER LES ÉLÉMENTS HTML
    // =========================================

    const formCommande = document.getElementById("formCommande");
    const messageForm = document.getElementById("messageForm");

    // =========================================
    // 3. FONCTION POUR AFFICHER UN MESSAGE
    // =========================================

    function afficherMessage(texte, type) {

        if (messageForm) {
            messageForm.textContent = texte;
            messageForm.className = type;
        } else {
            alert(texte);
        }

    }

    // =========================================
    // 4. TRAITEMENT DU FORMULAIRE
    // =========================================

    if (formCommande) {

        formCommande.addEventListener("submit", function (event) {

            event.preventDefault();

            // Récupérer les valeurs du formulaire
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

            // =====================================
            // 5. VÉRIFIER LES CHAMPS OBLIGATOIRES
            // =====================================

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

            // =====================================
            // 6. VÉRIFIER LE NUMÉRO DE TÉLÉPHONE
            // =====================================

            const telephoneNettoye =
                telephone.replace(/[\s()+-]/g, "");

            if (!/^\d{8,15}$/.test(telephoneNettoye)) {
                afficherMessage(
                    "Veuillez saisir un numéro de téléphone valide.",
                    "erreur"
                );
                return;
            }

            // =====================================
            // 7. VÉRIFIER L'ADRESSE EMAIL
            // =====================================

            const expressionEmail =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!expressionEmail.test(email)) {
                afficherMessage(
                    "Veuillez saisir une adresse email valide.",
                    "erreur"
                );
                return;
            }

            // =====================================
            // 8. PRÉPARER LA COMMANDE
            // =====================================

            const texteCommande = `
Bonjour IGAS CREATOR !

Je souhaite commander un service.

================================
INFORMATIONS DU CLIENT
================================

Nom complet : ${nom}
Province : ${province}
Commune : ${commune}
Téléphone : ${telephone}
Email : ${email}

================================
SERVICE DEMANDÉ
================================

${service}

================================
DESCRIPTION DU PROJET
================================

${description || "Aucune description supplémentaire."}

Merci de me contacter pour discuter de mon projet.
            `.trim();

            // =====================================
            // 9. CONSTRUIRE LE LIEN WHATSAPP
            // =====================================

            const lienCommande =
                "https://wa.me/" +
                numeroWhatsApp +
                "?text=" +
                encodeURIComponent(texteCommande);

            // =====================================
            // 10. OUVRIR WHATSAPP
            // =====================================

            afficherMessage(
                "Ouverture de WhatsApp pour envoyer votre commande...",
                "succes"
            );

            window.location.href = lienCommande;

        });

    } else {

        console.warn(
            "Formulaire introuvable. Vérifie id='formCommande' dans contacte.html."
        );

    }

    // =========================================
    // 11. CONFIGURER LES LIENS SOCIAUX
    // =========================================

    const boutonFacebook =
        document.getElementById("lienFacebook");

    const boutonInstagram =
        document.getElementById("lienInstagram");

    const boutonTikTok =
        document.getElementById("lienTikTok");

    const boutonWhatsApp =
        document.getElementById("lienWhatsApp");

    // Facebook
    if (boutonFacebook) {
        boutonFacebook.href = lienFacebook;
        boutonFacebook.target = "_blank";
        boutonFacebook.rel = "noopener noreferrer";
    }

    // Instagram
    if (boutonInstagram) {
        boutonInstagram.href = lienInstagram;
        boutonInstagram.target = "_blank";
        boutonInstagram.rel = "noopener noreferrer";
    }

    // TikTok
    if (boutonTikTok) {
        boutonTikTok.href = lienTikTok;
        boutonTikTok.target = "_blank";
        boutonTikTok.rel = "noopener noreferrer";
    }

    // WhatsApp
    if (boutonWhatsApp) {
        boutonWhatsApp.href =
            "https://wa.me/" + numeroWhatsApp;

        boutonWhatsApp.target = "_blank";
        boutonWhatsApp.rel = "noopener noreferrer";
    }

    // =========================================
    // 12. CONFIRMATION DANS LA CONSOLE
    // =========================================

    console.log("IGAS CREATOR : JavaScript chargé avec succès.");
    console.log("WhatsApp : " + numeroWhatsApp);

});
