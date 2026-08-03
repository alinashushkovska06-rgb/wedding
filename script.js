const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");
const letter = document.querySelector(".letter");

let opened = false;

envelope.addEventListener("click", () => {

    if (opened) return;

    opened = true;

    flap.style.transform = "rotateX(180deg)";
    flap.style.zIndex = "0";

    setTimeout(() => {
        letter.style.transform = "translate(-50%, -45%)";
    }, 500);

});
