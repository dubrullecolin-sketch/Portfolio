// =========================
// ANIMATION + MENU ACTIF
// =========================

const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".side-nav a");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            // Animation d'apparition
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

        // Cherche la section actuellement au centre de l'écran
        const visibleSections = [...sections].filter(section => {
            const rect = section.getBoundingClientRect();

            return (
                rect.top <= window.innerHeight * 0.45 &&
                rect.bottom >= window.innerHeight * 0.45
            );
        });

        if (visibleSections.length > 0) {

            const currentSection = visibleSections[0];

            const currentId = currentSection.getAttribute("id");

            navLinks.forEach((link) => {

                link.classList.remove("active");

                if (link.getAttribute("href") === `#${currentId}`) {
                    link.classList.add("active");
                }

            });
        }

    },
    {
        threshold: 0.15
    }
);


// Observe toutes les sections
sections.forEach((section) => {
    observer.observe(section);
});


// =========================
// CLIC SUR LE MENU
// =========================

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((otherLink) => {
            otherLink.classList.remove("active");
        });

        link.classList.add("active");

    });

});
