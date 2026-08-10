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

/* =========================
   TIMELINE HEART SCROLL
========================= */

const timeline = document.querySelector(".timeline");
const timelineHeart = document.querySelector("#timelineHeart");
const timelinePath = document.querySelector("#timelinePath");

function moveTimelineHeart() {

    if (!timeline  !timelineHeart  !timelinePath) return;

    const timelineRect = timeline.getBoundingClientRect();

    const start = window.innerHeight * 0.8;
    const end = -timelineRect.height * 0.15;

    let progress =
        (start - timelineRect.top) /
        (timelineRect.height + start - end);

    progress = Math.max(0, Math.min(1, progress));

    const pathLength = timelinePath.getTotalLength();
    const point = timelinePath.getPointAtLength(
        pathLength * progress
    );

    const x = (point.x / 100) * timeline.clientWidth;
    const y = (point.y / 1000) * timeline.clientHeight;

    timelineHeart.style.left = ${x}px;
    timelineHeart.style.top = ${y}px;
}

window.addEventListener("scroll", moveTimelineHeart, {
    passive: true
});

window.addEventListener("resize", moveTimelineHeart);

moveTimelineHeart();
