$(document).ready(function () {

    // Stop Page Reloading
    $(".login_form").submit(function (e) {
        e.preventDefault();
    });

    // Form Validation
    $("#login-btn").click(function () {

        var email = $("#email").val();
        var password = $("#password").val();
        var emailvalidation = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        if (email.length == "" || password.length == "") {
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
            $("#email").val('');
        }

        else if (localStorage.getItem("email") == email && localStorage.getItem("password") == password) {
            swal(
                localStorage.getItem("name"),
                'You are Login Succesfully',
                'success'
            )
            $("#email").val('');
            $("#password").val('');
        }

        else {
            swal(
                'Warning!',
                'Invalid Credentials',
                'warning'
            )
            $("#email").val('');
            $("#password").val('');
        }


        });


});