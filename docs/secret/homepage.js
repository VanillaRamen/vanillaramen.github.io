const timepiece = document.getElementById("timepiece");
const clock = document.getElementById("clock");
let now = new Date(Date.now());

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const days = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];

let hours = now.getHours();
let mins = now.getMinutes();
let secs = now.getSeconds();

function setDay() {
    timepiece.textContent =
        days[now.getDay()] + " "
        + months[now.getMonth()] + " "
        + now.getDate() + " ";
}

function updateClock() {
    secs++;
    if (secs >= 60) {
        secs = 0;
        mins++;
    }

    if (mins >= 60) {
        mins = 0;
        hours++;
    }

    if (hours >= 24) {
        hours = 0;

        now = new Date(Date.now());
        setDay();
    }

    clock.textContent =
        hours.toString().padStart(2, "0") + ":"
        + mins.toString().padStart(2, "0") + "["
        + secs.toString().padStart(2, "0") + "]";
}

window.addEventListener("load", setDay);
window.addEventListener("load", updateClock);
const countingup = setInterval(updateClock, 1000);