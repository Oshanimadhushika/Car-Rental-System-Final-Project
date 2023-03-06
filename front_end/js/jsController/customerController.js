var baseUrl="http://localhost:8080/back_end_war_exploded/";

var customer;
var customer_nic;

$('#BtnSignIn').click(function () {
    registerCustomer();
    clearAllRegiForm();
})

$('#btnCustomerLogIn').click(function (){
    let userName = $('#customer-user-name').val();
    let password = $('#customer-password').val();

    $.ajax({
        url: baseUrl + "customer?userName=" + userName,
        method: "GET",
        success: function (resp) {
            console.log(resp.userName + "=" + resp.data.userName)
            console.log(resp.userName + "=" + userName)
            if (resp.data.userName === userName && resp.data.password === password) {

                $("#LoginFormCss").attr("disabled","disabled");
                $("#CarDetailCss").attr("disabled","disabled");
                $("#CarStoreCss").attr("disabled","disabled");
                $("#HeaderFormCss").attr("disabled","disabled");
                $("#CartCss").removeAttr("disabled");
                $('#spaMainIndex').css('display','none');
                $('#spaCarStore').css('display','none');
                $('#spaCart').css('display','block');
                $('#spaOverview').css('display','none');
                $('#spaCarDetail').css('display','none');
                $('#spaLogin').css('display','none');
                $('#spaRegister').css('display','none');
                $('#spaUpdateIndex').css('display','none');

                /*this is want to call when the login rq is success*/
                sendVehicleNameToCart();
                loadCart();

            } else {
                alert("Username or Password Incorrect!.");
            }

        }
    });
});

function registerCustomer() {
    let nicFileName = $("#nicOrDrivingImg")[0].files[0].name;


    let nic =  $("#nicSignIn").val();
    let address = $("#addressSign").val();
    let contactNumber =$("#contactSignIn").val();
    let name= $("#nameSignIn").val();
    let drivingLicenseNumber= $("#drivingLicenseSignIn").val();
    let email= $("#emailSignIn").val();
    let password =$("#PasswordSignIn").val();
    let userName= $("#UsernameSignIn").val();


    var newDetails = {
        customerId:"C008",
        name: name,
        address: address,
        nic: nic,
        drivingLicenseNumber: drivingLicenseNumber,
        contactNumber: contactNumber,
        email: email,
        password:password,
        imageLocation: nicFileName,
        userName:userName
    }

    $.ajax({
        url: baseUrl+"customer",
        method :"post",
        data : JSON.stringify(newDetails),
        contentType:"application/json",
        success: function (resp) {
            console.log(resp);
            alert(resp.message);
            navToLogIn(resp.data);
           /* loadImage();*/

        },
        error: function(error) {
            let prase = JSON.parse(error.responseText);
            alert(prase.message);
        }
    });


   /* cleanRegisterForm();*/
}

function navToLogIn(data) {

        $('#spaMainIndex').css('display','none');
        $('#spaCarStore').css('display','none');
        $('#spaCart').css('display','none');
        $('#spaOverview').css('display','none');
        $('#spaCarDetail').css('display','none');
        $('#spaLogin').css('display','block');
        $('#spaRegister').css('display','none');

}

$("#btnUpdateSpa").click(function (){
    updateCustomer();

})

function updateCustomer(){

    var newDetails = {
        customerId:"C008",
        name: $("#update-name").val(),
        address: $("#update-address").val(),
        nic: $("#update-nic").val(),
        drivingLicenseNumber: $("#update-drivingLicense").val(),
        contactNumber: $("#update-contact").val(),
        email: $("#update-email").val(),
        password: $("#update-password").val(),
        imageLocation: $("#update-register-form-NIC-image").val(),
        userName:  $("#update-user-name").val(),
    }

 $.ajax({
     url: baseUrl + "customer",
     method: "PUT",
     contentType: "application/json",
     data: JSON.stringify(newDetails),
     success: function (res) {
         if (res.status === 200) {
             alert(res.message)
         } else {
             alert("Updated!")
         }
     },

 });
}


function loadAllCustomers(){
    $("#tableViewAllCustomer").empty();

    $.ajax({
        url: baseUrl + "customer",
        method: "GET",
        success: function (resp){
            for (const customer of resp.data){
/*
                let viewImage = customer.imageLocation;
*/
                let row =`<tr><th scope="row">${customer.customerId}</th><td>${customer.name}</td><td>${customer.address}</td><td>${customer.contactNumber}</td><td>${customer.nic}</td><td>${customer.email}</td><td><a style="cursor: pointer" class="text-info">${customer.imageLocation}</a></td></tr>`;
                $("#tableViewAllCustomer").append(row);

                $("#tableViewAllCustomer>tr").off("click");
                $("#tableViewAllCustomer>tr").click(function (){
                    customer_nic = $(this).children(":eq(1)").text();
                    console.log(customer_nic)
                    $("#navViewAllCustomer").prop('disabled',false);
                });
            }
        }
    });
}


function clearAllRegiForm() {

    $('#nicSignIn,#addressSign,#contactSignIn,#nameSignIn,#drivingLicenseSignIn,#emailSignIn,#PasswordSignIn,#UsernameSignIn').val("");

}



/*VALIDATIONS*/
//validation start

const cusNICRegEx = /^[0-9/A-z]{10,15}$/;
const cusDrivingRegEx = /^[0-9/A-z]{9}$/;
const cusNameRegEx = /^[A-z ]{2,20}$/;
const cusAddressRegEx = /^[0-9/A-z. ,]{7,}$/;
/*const cusAddressRegEx=/^[0-9/A-z]{20}$/;*/
const cusContactRegEx = /^[0-9]{3}[-]?[0-9]{7}$/;
const cusEmailRegEx = /^[a-z0-9]{3,}[@]?[a-z]{1,}[.]?[a-z]{2,}$/;
const cusPasswordRegEx = /^[a-z0-9]{7}$/;
const cusUseNameRegEx = /^[a-z ]{7}$/;


$('#nameSignIn,#emailSignIn,#nicSignIn,#addressSign,#contactSignIn,#drivingLicenseSignIn,#UsernameSignIn,#PasswordSignIn').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault(); // stop execution of the button
    }
});

$('#nameSignIn,#emailSignIn,#nicSignIn,#addressSign,#contactSignIn,#drivingLicenseSignIn,#UsernameSignIn,#PasswordSignIn').on('blur', function () {
    formValid();
});


$("#nameSignIn").on('keyup', function (eventOb) {
    setButton();


});
$("#emailSignIn").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfCustValid();
    }
});

$("#addressSign").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfCustValid();
    }
});

$("#contactSignIn").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfCustValid();
    }
});

$("#drivingLicenseSignIn").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfCustValid();
    }
});

$("#UsernameSignIn").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfCustValid();
    }
});
$("#PasswordSignIn").on('keyup', function (eventOb) {
    setButton();
    if (eventOb.key == "Enter") {
        checkIfCustValid();
    }
});

// focusing events end
$("#BtnSignIn").attr('disabled', true);


function formValid() {
    var cusName = $("#nameSignIn").val();
    $("#nameSignIn").css('border', '2px solid green');
    $("#lblnameSignIn").text("");
    if (cusNameRegEx.test(cusName)) {
        var cusEmail = $("#emailSignIn").val();
        if (cusEmailRegEx.test(cusEmail)) {
            $("#emailSignIn").css('border', '2px solid green');
            $("#lblemailSignIn").text("");
            var cusNic = $("#nicSignIn").val();
            if (cusNICRegEx.test(cusNic)) {
                $("#nicSignIn").css('border', '2px solid green');
                $("#lblnicSignIn").text("");
                var cusAddress = $("#addressSign").val();
                if (cusAddressRegEx.test(cusAddress)) {
                    $("#addressSignIn").css('border', '2px solid red');
                    $("#lbladdressSign").text("");
                    var carContact = $("#contactSignIn").val();
                    if (cusContactRegEx.test(carContact)) {
                        $("#contactSignIn").css('border', '2px solid green');
                        $("#lblcontactSignIn").text("");
                        var carDrivingLice = $("#drivingLicenseSignIn").val();
                        if (cusDrivingRegEx.test(carDrivingLice)) {
                            $("#drivingLicenseSignIn").css('border', '2px solid green');
                            $("#lbldrivingLicenseSignIn").text("");
                            var carUser = $("#UsernameSignIn").val();
                            if (cusUseNameRegEx.test(carUser)) {
                                $("#UsernameSignIn").css('border', '2px solid green');
                                $("#lblUsernameSignIn").text("");


                                var cusPassword = $("#PasswordSignIn").val();
                                if (cusPasswordRegEx.test(cusPassword)) {
                                    $("#PasswordSignIn").css('border', '2px solid green');
                                    $("#lblPasswordSignIn").text("");
                                    return true;
                                } else {
                                    $("#PasswordSignIn").css('border', '2px solid red');
                                    $("#lblPasswordSignIn").text("Invalid Please Enter Again(Ex :Please must be include only letters and numbers at least 6");
                                    return false;
                                }
                            } else {
                                $("#UsernameSignIn").css('border', '2px solid red');
                                $("#lblUsernameSignIn").text("Invalid Please Enter Again(Ex :Please must be include only letters at least 6");
                                return false;
                            }
                        } else {
                            $("#drivingLicenseSignIn").css('border', '2px solid red');
                            $("#lbldrivingLicenseSignIn").text("Invalid Please Enter Again(Ex : 45645645L");
                            return false;
                        }
                    } else {
                        $("#contactSignIn").css('border', '2px solid red');
                        $("#lblcontactSignIn").text("Invalid Please Enter Again(Ex :0714524520)");
                        return false;
                    }
                } else {
                    $("#addressSign").css('border', '2px solid green');
                    $("#lbladdressSign").text("Invalid Please Enter Again(Ex : 02,Bibile)");
                    return false;
                }
            } else {
                $("#nicSignIn").css('border', '2px solid red');
                $("#lblnicSignIn").text("Invalid Please Enter Again(Ex : 200108202209 / 20010820220V)");
                return false;
            }
        } else {
            $("#emailSignIn").css('border', '2px solid red');
            $("#lblemailSignIn").text("Invalid Please Enter Again(Ex : oshani12@gmail.com)");
            return false;
        }
    } else {
        $("#nameSignIn").css('border', '2px solid red');
        $("#lblnameSignIn").text("Invalid Please Enter Again(Ex : Oshani)");
        return false;
    }
}


function checkIfCustValid() {
    var cusName = $("#nameSignIn").val();
    if (cusNameRegEx.test(cusName)) {
        $("#emailSignIn").focus();
        var cusEmail = $("#emailSignIn").val();
        if (cusEmailRegEx.test(cusEmail)) {
            $("#nicSignIn").focus();
            var cusNic = $("#nicSignIn").val();
            if (cusNICRegEx.test(cusNic)) {
                $("#addressSign").focus();
                var cusAddress = $("#addressSign").val();
                if (cusAddressRegEx.test(cusAddress)) {
                    $("#contactSignIn").focus();
                    var cusContact = $("#contactSignIn").val();
                    if (cusContactRegEx.test(cusContact)) {
                        $("#drivingLicenseSignIn").focus();
                        var cusDrivingLic = $("#drivingLicenseSignIn").val();
                        if (cusDrivingRegEx.test(cusDrivingLic)) {
                            $("#UsernameSignIn").focus();
                            var cusUser = $("#UsernameSignIn").val();
                            if (cusUseNameRegEx.test(cusUser)) {
                                $("#PasswordSignIn").focus();
                                var cusPassword = $("#PasswordSignIn").val();
                                if (cusPasswordRegEx.test(cusPassword)) {
                                    var resp = cusPasswordRegEx.test(cusPassword);
                                    if (resp) {
                                        if ($("#nicOrDrivingImg").val() == "") {
                                            alert("Please Upload Driver License Image.....")
                                        } else {
                                            registerCustomer();
                                            clearAllRegiForm();
                                        }
                                    }
                                } else {
                                    $("#PasswordSignIn").focus();
                                }
                            } else {
                                $("#UsernameSignIn").focus();
                            }
                        } else {
                            $("#drivingLicenseSignIn").focus();
                        }
                    } else {
                        $("#contactSignIn").focus();
                    }
                } else {
                    $("#addressSign").focus();
                }

            } else {
                $("#nicSignIn").focus()
            }
        } else {
            $("#emailSignIn").focus();
        }
    } else {
        $("#nameSignIn").focus();
    }

}

function setButton() {
    let b = formValid();
    if (b) {
        $("#BtnSignIn").attr('disabled', false);
    } else {
        $("#BtnSignIn").attr('disabled', true);
    }
}

$('#BtnSignIn').click(function () {
    checkIfCustValid();
});