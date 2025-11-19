const carousel = document.querySelector('.carousel__container');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');

// Récupère le premier item pour calculer sa largeur
const premierItem = document.querySelector('.carousel__item');

// Calcule dynamiquement la largeur de défilement
let scrollAmount = 276; // Valeur par défaut

if (premierItem) {
    // clientWidth donne la largeur de l'élément (260px)
    // On ajoute le gap de 16px pour avoir la distance totale
    scrollAmount = premierItem.clientWidth + 16;
}

// Largeur de défilement d'un item
if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
}