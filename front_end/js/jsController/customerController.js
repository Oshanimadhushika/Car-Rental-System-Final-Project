var baseUrl="http://localhost:8080/back_end_war_exploded/";

var customer;
var customer_nic;

$('#BtnSignIn').click(function () {
    registerCustomer();
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
        customerId:"C007",
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
        customerId:"C007",
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

