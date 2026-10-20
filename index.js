// ===================================
// 1. RÉCUPÉRER LES ÉLÉMENTS HTML
// ===================================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const sidebarOverlay = document.getElementById("sidebarOverlay");

// ===================================
// 2. OUVRIR LE SIDEBAR
// ===================================

function ouvrirSidebar() {
sidebar.classList.add("active");
sidebarOverlay.classList.add("active");

menuBtn.setAttribute("aria-expanded", "true");
menuBtn.setAttribute("aria-label", "Fermer le menu");

document.body.style.overflow = "hidden";

}

// ===================================
// 3. FERMER LE SIDEBAR
// ===================================

function fermerSidebar() {
sidebar.classList.remove("active");
sidebarOverlay.classList.remove("active");

menuBtn.setAttribute("aria-expanded", "false");
menuBtn.setAttribute("aria-label", "Ouvrir le menu");

document.body.style.overflow = "";

}

// ===================================
// 4. CLIQUER SUR LE BOUTON MENU
// ===================================

menuBtn.addEventListener("click", function () {
if (sidebar.classList.contains("active")) {
fermerSidebar();
} else {
ouvrirSidebar();
}
});

// ===================================
// 5. CLIQUER SUR LA CROIX
// ===================================

closeBtn.addEventListener("click", fermerSidebar);

// ===================================
// 6. CLIQUER SUR LE FOND SOMBRE
// ===================================

sidebarOverlay.addEventListener("click", fermerSidebar);

// ===================================
// 7. FERMER APRÈS AVOIR CHOISI UN LIEN
// ===================================

const sidebarLinks = sidebar.querySelectorAll("nav a");

sidebarLinks.forEach(function (lien) {
lien.addEventListener("click", fermerSidebar);
});

// ===================================
// 8. FERMER AVEC LA TOUCHE ÉCHAP
// ===================================

document.addEventListener("keydown", function (event) {
if (event.key === "Escape") {
fermerSidebar();
}
});

// ===================================
// 9. AFFICHER L'ANNÉE ACTUELLE
// ===================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
currentYear.textContent = new Date().getFullYear();
}
