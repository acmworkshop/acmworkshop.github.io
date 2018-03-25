// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2019 15:37:25").getTime();

const io = require('socket.io-client');

const socket = io.connect('http://localhost:8005');


socket.on('connect', function(data) { console.log('connected to server'); });
socket.on('disconnect', function(data) { console.log('disconnected from server'); });

socket.on('timer', function(timestamp) {
    let now = timestamp;

    // Find the distance between now an the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in an element with id="demo"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        document.getElementById("demo").innerHTML = "IT IS HERE";
    }
});

// Emits a 'subscribeToTimer' request, which server.js intercepts
socket.emit('subscribeToTimer', 1000);


