document.getElementById("srch-term").setAttribute("required","required");

function searchFunc() {
    var inp = document.getElementById("srch-term");
    var Inpval = inp.value;
    var lowVal = Inpval.toLowerCase();
    console.log(lowVal);

    if (lowVal == "ceiling" || lowVal == "chandelier") {
        window.location.assign("ceiling.html");
    }
    else if (lowVal == "fluorescent") {
        window.location.assign("fluorescent.html");
    }
    else if (lowVal == "spot" || lowVal == "spot light" || lowVal == "spotlight") {
        window.location.assign("spotlight.html");
    }
    else if (lowVal == "pendant") {
        window.location.assign("pendant.html");
    }
    else if (lowVal == "decorative" || lowVal == "decor") {
        window.location.assign("decorative.html");
    }
    else if (lowVal == "emergency") {
        window.location.assign("emergency.html");
    }
    else if (lowVal == "street" || lowVal == "streetlight" || lowVal == "street light") {
        window.location.assign("street.html");
    }
    else if (lowVal == "bulb" || lowVal == "led" || lowVal == "led light" || lowVal == "led bulb" || lowVal == "light") {
        window.location.assign("light.html");
    }
    else if (lowVal == "smart" || lowVal == "smart light" || lowVal == "smartlight") {
        window.location.assign("smartlight.html");
    }
    else if (lowVal == "kichler") {
        window.location.assign("kichler.html");
    }
    else if (lowVal == "generation") {
        window.location.assign("generation.html");
    }
    else if (lowVal == "maxim") {
        window.location.assign("maxim.html");
    }
    else if (lowVal == "minka" || lowVal == "minka lavery" || lowVal == "minkalavery") {
        window.location.assign("minka.html");
    }
    else if (lowVal == "progress") {
        window.location.assign("progress.html");
    }
    else if (lowVal == "") {
        swal(
            'Warning!',
            'Please Search Something',
            'warning'
        )
    }
    else{
        window.location.assign("error.html");
    }
}

$('#srch-term').keydown(function (event) {
    if (event.keyCode == 13) {
        searchFunc();
    }
});