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
