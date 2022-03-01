// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function () {
    // =============================
    // Private methods and propeties
    // =============================
    cart = [];

    // Constructor
    function Item(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }

    // Save cart
    function saveCart() {
        sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    }

    // Load cart
    function loadCart() {
        cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem("shoppingCart") != null) {
        loadCart();
    }


    // =============================
    // Public methods and propeties
    // =============================
    var obj = {};

    // Add to cart
    obj.addItemToCart = function (name, price, count) {

        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count++;
                saveCart();
                return;
            }
        }
        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    }
    // Set count from item
    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
    };
    // Remove item from cart
    obj.removeItemFromCart = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart[item].count--;
                if (cart[item].count === 0) {
                    cart.splice(item, 1);
                }
                break;
            }
        }
        saveCart();
    }

    // Remove all items from cart
    obj.removeItemFromCartAll = function (name) {
        for (var item in cart) {
            if (cart[item].name === name) {
                cart.splice(item, 1);
                break;
            }
        }
        saveCart();
    }

    // Clear cart
    obj.clearCart = function () {
        cart = [];
        saveCart();
    }

    // Count cart 
    obj.totalCount = function () {
        var totalCount = 0;
        for (var item in cart) {
            totalCount += cart[item].count;
        }
        return totalCount;
    }

    // Total cart
    obj.totalCart = function () {
        var totalCart = 0;
        for (var item in cart) {
            totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }

    //Discounted Cart
    obj.discountCart = function () {
        var discountCart = 0;
        for (var item in cart) {
            discountCart += shoppingCart.totalCart() - (shoppingCart.totalCart() * 0.10);
        }
        return Number(discountCart.toFixed(2));
    }

    // List cart
    obj.listCart = function () {
        var cartCopy = [];
        for (i in cart) {
            item = cart[i];
            itemCopy = {};
            for (p in item) {
                itemCopy[p] = item[p];

            }
            itemCopy.total = Number(item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy)
        }
        return cartCopy;
    }

    // cart : Array
    // Item : Object/Class
    // addItemToCart : Function
    // removeItemFromCart : Function
    // removeItemFromCartAll : Function
    // clearCart : Function
    // countCart : Function
    // totalCart : Function
    // listCart : Function
    // saveCart : Function
    // loadCart : Function
    return obj;
})();


// *****************************************
// Triggers / Events
// ***************************************** 
// Add item
$('.add-to-cart').click(function (event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
});

// Clear items
$('.clear-cart').click(function () {
    shoppingCart.clearCart();
    displayCart();
});


function displayCart() {
    var cartArray = shoppingCart.listCart();
    var output = "";
    output = "<tr style='text-align: left;'><th>Product</th><th>Price</th><th colspan='2'>Quantity</th><th>Total</th></tr>";
    for (var i in cartArray) {
        output += "<tr style='text-align: left;'>"
            + "<td>" + cartArray[i].name + "</td>"
            + "<td>(" + cartArray[i].price + ")</td>"
            + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
            + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
            + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
            + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
            + " = "
            + "<td>" + cartArray[i].total + "</td>"
            + "</tr>";
    }
    $('.show-cart').html(output);
    $('.total-cart').html(shoppingCart.totalCart());
    $('.discount-cart').html(shoppingCart.totalCart().toLocaleString());
    $('.total-count').html(shoppingCart.totalCount());
}

//codeApply
function codeApply() {
    var code = document.getElementById("disc_code");
    var Codeval = code.value;
    var lowVall = Codeval.toLowerCase();
    if (lowVall == "welcome10") {
            var price = parseInt(document.getElementById("totCart").innerHTML);
            console.log(price);
            var calcn = price - (price * 0.10);
            var totalprice = document.getElementById("discCart");
            totalprice.innerHTML = calcn.toLocaleString();
    }
    else if (code.value == "") {
        var totalprice = document.getElementById("discCart");
        totalprice.innerHTML = document.getElementById("totCart").innerHTML;
    }
}

// Delete item button

$('.show-cart').on("click", ".delete-item", function (event) {
    jQuery("#disc_code").val("");
    var name = $(this).data('name')
    shoppingCart.removeItemFromCartAll(name);
    displayCart();
})


// -1
$('.show-cart').on("click", ".minus-item", function (event) {
    jQuery("#disc_code").val("");
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
})
// +1
$('.show-cart').on("click", ".plus-item", function (event) {
    jQuery("#disc_code").val("");
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
})

// Item count input
$('.show-cart').on("change", ".item-count", function (event) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
});

displayCart();


$("#buyBtn").click(function () {
    var name = $("#discCart").text();


    if (name != "0") {

        $('#user-cart').modal('show')

        $('#user-cart-name').on('keypress', function (key) {
            if(key.charCode == 32){ return true; }
            if ((key.charCode < 97 || key.charCode > 122) && (key.charCode < 65 || key.charCode > 90) && (key.charCode != 45)) {
                return false;
            }
        });

        $("#user-cart-phone").keypress(function (e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        });

        $("#user-cart-submit").click(function () {
            var user_cart_name = $("#user-cart-name").val();
            var user_cart_email = $("#user-cart-email").val();
            var user_cart_phone = $("#user-cart-phone").val();
            var user_cart_address = $("#user-cart-address").val();
            var emailvalidation = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

            if (user_cart_name.length == "" || user_cart_email.length == "" || user_cart_phone.length == "" || user_cart_address.length == "") {
                swal(
                    'Warning!',
                    'Please Fill Complete Form',
                    'warning'
                )
            }
            else if (!emailvalidation.test(user_cart_email)) {
                swal(
                    'Warning!',
                    'Invalid Email',
                    'warning'
                )
                $("#user-cart-email").val('');
            }
            else if (user_cart_phone.length < 11) {
                swal(
                    'Warning!',
                    'Phone Number Is Incorrect',
                    'warning'
                )
                $("#user-cart-phone").val('');
            }
            else {
                var btns = $(".delete-item");
                for (var i = 0; i < btns.length; i++) {
                    $(".delete-item").click();
                }

                
                swal(
                    user_cart_name,
                    'Our Order Team Will Contact You Shortly',
                    'success'
                )
                $("#user-cart-name").val('');
                $("#user-cart-email").val('');
                $("#user-cart-phone").val('');
                $("#user-cart-address").val('');
                $("#user-cart-submit").prop('disabled', true);
            }
        });
    }
    else {
        swal(
            'Warning!',
            'Your Cart is Empty',
            'warning'
        )
    }

});

