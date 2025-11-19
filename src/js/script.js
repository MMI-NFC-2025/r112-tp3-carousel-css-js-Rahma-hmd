// *** CAROUSEL ***
// TODO
// Attend que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    // Récupère les éléments du carousel
    const container = document.querySelector('.carousel__container');
    const prevBtn = document.querySelector('.carousel__button--prev');
    const nextBtn = document.querySelector('.carousel__button--next');
    const items = document.querySelectorAll('.carousel__item');

    // Vérifie que tous les éléments existent
    if (!container || !prevBtn || !nextBtn || items.length === 0) {
        console.error('Éléments du carousel non trouvés');
        return;
    }

    // Calcule la largeur d'un item + le gap
    // 260px (largeur de l'item) + 16px (gap) = 276px
    const scrollAmount = 276;

    // Gestion du clic sur le bouton précédent
    prevBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount, // Défile vers la gauche
            behavior: 'smooth'   // Animation fluide
        });
    });

    // Gestion du clic sur le bouton suivant
    nextBtn.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,  // Défile vers la droite
            behavior: 'smooth'   // Animation fluide
        });
    });
});