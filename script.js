const intro = document.getElementById("intro");
const site = document.getElementById("site");
const seal = document.getElementById("sealButton");

seal.addEventListener("click", function () {

    intro.style.opacity = "0";

    setTimeout(function () {
        intro.style.display = "none";
        site.classList.add("show");
    }, 900);

});
