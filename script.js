// ==========================
// WEDDING INVITATION 3.0
// ==========================

const envelope = document.querySelector(".envelope");
const seal = document.getElementById("seal");
const music = document.getElementById("music");
const intro = document.getElementById("intro");
const site = document.getElementById("site");

let opened = false;

seal.addEventListener("click", () => {

    if(opened) return;

    opened = true;

    // запускаємо музику
    music.volume = 1;

    music.play().catch(() => {});

    // відкриваємо конверт
    envelope.classList.add("open");

    // показуємо сайт
    setTimeout(() => {

        site.classList.add("show");

    },1200);

    // прибираємо заставку

    setTimeout(() => {

        intro.style.pointerEvents="none";

        intro.style.opacity="0";

        intro.style.transition="opacity 1s ease";

    },1700);

});
