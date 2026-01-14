// initialize element objects
const daypiece = document.getElementById("daypiece");
const timepiece = document.getElementById("timepiece");
let now = new Date(Date.now());

// const names
const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const days = [
    "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
];

// initialize variables
let hours = now.getHours();
let mins = now.getMinutes();
let secs = now.getSeconds();

// initialize the day (called once)
function setDay() {
    daypiece.textContent =
        days[now.getDay()] + " "
        + months[now.getMonth()] + " "
        + now.getDate() + " ";
}

function updateTimepiece() {
    // inc secs
    secs++;

    // check secs
    if (secs >= 60) {
        secs = 0;
        mins++;
        // check mins
        if (mins >= 60) {
            mins = 0;
            hours++;
            // check hours
            if (hours >= 24) {
                hours = 0;
                now = new Date(Date.now());
                setDay();
            } // end hours check
        } // end mins check
    } // end secs check

    // write every call
    timepiece.textContent =
        (hours % 12 ? hours % 12 : 12).toString().padStart(2, "0") + ":"
        + mins.toString().padStart(2, "0") + "/"
        + secs.toString().padStart(2, "0") + "/"
        + (hours < 12 ? "AM" : "PM");
    // putting the above in the if statements would require
    // putting each part of the timepiece in spans.
    // im not doing that.
}

window.addEventListener("load", setDay); // on load
window.addEventListener("load", updateTimepiece); // on load
const countingup = setInterval(updateTimepiece, 1000); // every 1000 ms
