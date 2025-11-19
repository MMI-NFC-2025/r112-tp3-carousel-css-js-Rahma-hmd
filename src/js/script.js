document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.carousel__container');
    const prevBtn = document.querySelector('.carousel__button--prev');
    const nextBtn = document.querySelector('.carousel__button--next');

    if (!container || !prevBtn || !nextBtn) {
        console.error('Éléments du carousel non trouvés');
        return;
    }

    const scrollAmount = 276;

    prevBtn.addEventListener('click', () => {
        // Défile de scrollAmount vers la gauche (sans animation)
        container.scrollLeft -= scrollAmount;
    });

    nextBtn.addEventListener('click', () => {
        // Défile de scrollAmount vers la droite (sans animation)
        container.scrollLeft += scrollAmount;
    });
});

const carousel = document.querySelector('.carousel__container');
const prevButton = document.querySelector('.carousel__button--prev');
const nextButton = document.querySelector('.carousel__button--next');

// Largeur de défilement d'un item
if (carousel) {
    // Scroll au clic sur le bouton précédent
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -276, behavior: 'smooth' });
    });

    // Scroll au clic sur le bouton suivant
    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: 276, behavior: 'smooth' });
    });
}