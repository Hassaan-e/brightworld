$(document).ready(function () {

    // Stop Page Reloading
    $(".signup_form").submit(function (e) {
        e.preventDefault();
    });

    // Only Text
    $('#first-name').on('keypress', function (key) {
        if ((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) {
            return false;
        }
    });

    $('#last-name').on('keypress', function (key) {
        if ((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) {
            return false;
        }
    });

    $('#city').on('keypress', function (key) {
        if ((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) {
            return false;
        }
    });

    $('#country').on('keypress', function (key) {
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
    $("#register-btn").click(function () {
        var firstname = $("#first-name").val();
        var lastname = $("#last-name").val();
        var email = $("#user-email").val();
        var phone = $("#phone").val();
        var address = $("#address").val();
        var city = $("#city").val();
        var country = $("#country").val();
        var password = $("#password").val();
        var confirmpassword = $("#confirm-password").val();
        var emailvalidation = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;


        if (firstname.length == "" || lastname.length == "" || email.length == "" || phone.length == "" || address.length == "" || city.length == "" || country.length == "" || password.length == "" || confirmpassword.length == "") {
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
            $("#user-email").val('');
        }

        else if (phone.length < 11) {
            swal(
                'Warning!',
                'Phone Number Is Incorrect',
                'warning'
            )
            $("#phone").val('');
        }

        else if (password != confirmpassword) {
            swal(
                'Warning!',
                'Passwords Do Not Match',
                'warning'
            )
            $("#password").val('');
            $("#confirm-password").val('');
        }
        else {
            localStorage.setItem("name", firstname);
            localStorage.setItem("email", email);
            localStorage.setItem("password", confirmpassword);
            swal(
                firstname + " " + lastname,
                'You are Registered Succesfully',
                'success'
            )
            $("#first-name").val('');
            $("#last-name").val('');
            $("#user-email").val('');
            $("#phone").val('');
            $("#address").val('');
            $("#city").val('');
            $("#country").val('');
            $("#password").val('');
            $("#confirm-password").val('');
        }

    });

});