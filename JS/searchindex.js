document.getElementById("srch-term").setAttribute("required","required");

function searchFunc() {
    var inp = document.getElementById("srch-term");
    var Inpval = inp.value;
    var lowVal = Inpval.toLowerCase();
    console.log(lowVal);

    if (lowVal == "ceiling" || lowVal == "chandelier") {
        window.location.assign("Pages/ceiling.html");
    }
    else if (lowVal == "fluorescent") {
        window.location.assign("Pages/fluorescent.html");
    }
    else if (lowVal == "spot" || lowVal == "spot light" || lowVal == "spotlight") {
        window.location.assign("Pages/spotlight.html");
    }
    else if (lowVal == "pendant") {
        window.location.assign("Pages/pendant.html");
    }
    else if (lowVal == "decorative" || lowVal == "decor") {
        window.location.assign("Pages/decorative.html");
    }
    else if (lowVal == "emergency") {
        window.location.assign("Pages/emergency.html");
    }
    else if (lowVal == "street" || lowVal == "streetlight" || lowVal == "street light") {
        window.location.assign("Pages/street.html");
    }
    else if (lowVal == "bulb" || lowVal == "led" || lowVal == "led light" || lowVal == "led bulb" || lowVal == "light") {
        window.location.assign("Pages/light.html");
    }
    else if (lowVal == "smart" || lowVal == "smart light" || lowVal == "smartlight") {
        window.location.assign("Pages/smartlight.html");
    }
    else if (lowVal == "kichler") {
        window.location.assign("Pages/kichler.html");
    }
    else if (lowVal == "generation") {
        window.location.assign("Pages/generation.html");
    }
    else if (lowVal == "maxim") {
        window.location.assign("Pages/maxim.html");
    }
    else if (lowVal == "minka" || lowVal == "minka lavery" || lowVal == "minkalavery") {
        window.location.assign("Pages/minka.html");
    }
    else if (lowVal == "progress") {
        window.location.assign("Pages/progress.html");
    }
    else if (lowVal == "") {
        swal(
            'Warning!',
            'Please Search Something',
            'warning'
        )
    }
    else{
        window.location.assign("Pages/error.html");
    }
}

$('#srch-term').keydown(function (event) {
    if (event.keyCode == 13) {
        searchFunc();
    }
});