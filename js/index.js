
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
    let newYear = new Date("January 1, 2024 00:00:00");
    let currentYear = new Date();

    let diff = Math.floor(newYear - currentYear);

    let seconds = Math.floor(diff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;

    daysEl.innerHTML = days + "<span> Days</span>";
    hoursEl.innerHTML = hours + "<span> hours</span>";
    minutesEl.innerHTML = minutes + "<span> minutes</span>";
    secondsEl.innerHTML = seconds + "<span> seconds</span>";
}

setInterval(updateCountdown,1000);