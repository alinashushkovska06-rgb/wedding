const intro = document.getElementById("intro");
const site = document.getElementById("site");
const music = document.getElementById("music");
const seal = document.getElementById("sealButton");

let opened = false;

seal.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    music.play();

    intro.style.transform = "scale(1.03)";
    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        site.classList.add("show");

    }, 900);

});

/* ===========================
   ПЛАВНА АНІМАЦІЯ ПРИ СКРОЛІ
=========================== */

const animatedSections = document.querySelectorAll(
    '.invitation, .calendar-section'
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }

        });
    },
    {
        threshold: 0.15
    }
);

animatedSections.forEach((section) => {
    observer.observe(section);
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
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

revealElements.forEach((element) => {
    revealObserver.observe(element);
});
