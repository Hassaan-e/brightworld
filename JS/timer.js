
// Set the date we're counting down to
var countDownDate = new Date("April 30, 2021 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // console.log(days);
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

    // Output the result in an element with id="demo"
    var d = document.getElementById("day");
    var h = document.getElementById("hr");
    var m = document.getElementById("min");
    var s = document.getElementById("sec");
    var st1 = document.getElementById("smalltext1");
    var st2 = document.getElementById("smalltext2");
    var st3 = document.getElementById("smalltext3");
    var st4 = document.getElementById("smalltext4");

    d.innerHTML = days;
    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        h.innerHTML = "";
        m.innerHTML = "";
        s.innerHTML = "";
        st1.innerHTML = "";
        st2.innerHTML = "";
        st3.innerHTML = "";
        st4.innerHTML = "";
        d.innerHTML = "EXPIRED";
    }
}, 1000);