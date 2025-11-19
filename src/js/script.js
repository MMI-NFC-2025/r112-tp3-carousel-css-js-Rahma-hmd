const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

/**
 * Calcule la distance de défilement à chaque clic
 * → largeur réelle de la première slide + le gap (16px)
 */
function getScrollAmount() {
    const firstItem = document.querySelector(".carousel__item");
    if (!firstItem) return 0;
    const itemWidth = firstItem.getBoundingClientRect().width;
    const gap = 16; // même valeur que dans le CSS (gap: 16px)
    return itemWidth + gap;
}

if (carousel && prevButton && nextButton) {
    prevButton.addEventListener("click", () => {
        const amount = getScrollAmount();
        carousel.scrollBy({ left: -amount, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        const amount = getScrollAmount();
        carousel.scrollBy({ left: amount, behavior: "smooth" });
    });
}
