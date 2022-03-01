var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var modalh5 = document.getElementById("h501");
var modalp = document.getElementById("p01");
var modalh3 = document.getElementById("h301");
var modala = document.getElementById("a01");
// var headr = document.getElementById("headbar");
// var cartbtn = document.getElementById("btnCart");
function myEye(event) {
    modal.style.display = "block";
    modalImg.src = "Images/" + event + ".jpg";
    modalh5.innerHTML = document.getElementById("h5_" + event).innerHTML;
    modalp.innerHTML = document.getElementById("p_" + event).innerHTML;
    modalh3.innerHTML = document.getElementById("h3_" + event).innerHTML;
    modala.href = "Files/" + event + ".docx";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}


$('#user-review-name').on('keypress', function (key) {
    if(key.charCode == 32){ return true; }
    if ((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) {
        return false;
    }
});

$("#write-review").click(function () {

    $('#user-review').modal('show')

    $("#user-review-submit").click(function () {
        var user_review_name = $("#user-review-name").val();
        var user_review_email = $("#user-review-email").val();
        var user_review_address = $("#user-review-address").val();
        var emailvalidation = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        if (user_review_name.length == "" || user_review_email.length == "" || user_review_address.length == "") {
            swal(
                'Warning!',
                'Please Fill Complete Form',
                'warning'
            )
        }
        else if (!emailvalidation.test(user_review_email)) {
            swal(
                'Warning!',
                'Invalid Email',
                'warning'
            )
            $("#user-review-email").val('');
        }
        else {

            var reviewInfo = {Name: user_review_name, Comment: user_review_address};

            localStorage.setItem("Review", JSON.stringify(reviewInfo));

            swal(
                user_review_name,
                'Your Review Has Been Submitted',
                'success'
            )
            $("#user-review-name").val('');
            $("#user-review-email").val('');
            $("#user-review-address").val('');
        }
    });
});