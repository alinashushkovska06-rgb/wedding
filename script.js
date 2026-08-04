// ===========================
// ELEMENTS
// ===========================

const envelope = document.querySelector(".envelope");
const seal = document.getElementById("seal");
const intro = document.getElementById("intro");
const website = document.getElementById("website");
const music = document.getElementById("bgMusic");

// ===========================
// OPEN ENVELOPE
// ===========================

seal.addEventListener("click", () => {
    music.play().catch(error => {
    console.log("Музика не запустилась:", error);
});

    // щоб не можна було натиснути двічі
    seal.disabled = true;

    // відкриваємо конверт
    envelope.classList.add("open");

    // через 2 секунди ховаємо конверт
    setTimeout(() => {

        envelope.classList.add("hide");

    }, 2000);

    // показуємо сайт
    setTimeout(() => {

        intro.style.display = "none";

        website.classList.add("show");

        document.body.style.overflowY = "auto";

    }, 2800);

});
