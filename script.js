// JavaScript code for Digital Clock

function updateClock() {
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    // Format the time
    hours = padZero(hours);
    minutes = padZero(minutes);
    seconds = padZero(seconds);

    // Display the time
    clock.textContent = hours + ':' + minutes + ':' + seconds;

    // Schedule the next update
    setTimeout(updateClock, 1000);
}

function padZero(number) {
    return (number < 10) ? '0' + number : number;
}

// Start the clock
updateClock();
