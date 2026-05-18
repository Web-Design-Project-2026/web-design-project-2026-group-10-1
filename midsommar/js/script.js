// HAMBURGER MENU //
const menu = document.getElementById("side-menu");
const burger = document.querySelector(".hamburger");

burger.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// COUNTDOWN TIMER //
const malDate = new Date("June 21, 2026 00:00:00").getTime();

const timer = setInterval(function() {

    const now = new Date().getTime();

    const distance = malDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days < 10 ? "0" + days : days;
    document.getElementById("hours").textContent = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").textContent = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").textContent = seconds < 10 ? "0" + seconds : seconds;

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".countdown-boxes").classList.add("dold");
        document.getElementById("endingMessage").classList.remove("dold");
    }

}, 1000);