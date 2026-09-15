// =========================
// ANIMATION AU SCROLL
// =========================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// =========================
// MENU MOBILE
// =========================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.forEach((otherLink) => {
            otherLink.classList.remove("active");
        });

        link.classList.add("active");

    });

});
