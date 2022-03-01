$(document).ready(function () {

    // Stop Page Reloading
    $(".contact_form").submit(function (e) {
        e.preventDefault();
    });

    // Only Text
    $('#name').on('keypress', function (key) {
        if(key.charCode == 32){ return true; }
        if ((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) {
            return false;
        }
    });

    // Only Number
    $("#phone").keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });

    // Form Validation
    $("#contact-btn").click(function () {
        var name = $("#name").val();
        var email = $("#email").val();
        var phone = $("#phone").val();
        var subject = $("#subject").val();
        var comment = $("#comment").val();
        var emailvalidation = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;


        if (name.length == "" || email.length == "" || phone.length == "" || subject.length == "" || comment.length == "") {
            swal(
                'Warning!',
                'Please Fill Complete Form',
                'warning'
            )
        }
        else if (!emailvalidation.test(email)) {
            swal(
                'Warning!',
                'Invalid Email',
                'warning'
            )
        }
        else if (phone.length < 11) {
            swal(
                'Warning!',
                'Phone Number Is Incorrect',
                'warning'
            )
            $("#phone").val('');
        }
        else {

            var contactInfo = {Name: name, Email: email, Phone: phone, Subject: subject, Comment: comment};

            localStorage.setItem("Contact", JSON.stringify(contactInfo));

            swal(
                name,
                'Your Message Has Been Sent Succesfully',
                'success'
            )
            $("#name").val('');
            $("#email").val('');
            $("#phone").val('');
            $("#subject").val('');
            $("#comment").val('');
        }

    });

});