var baseUrl="http://localhost:8080/car-rental/";

$('#BtnSignIn').click(function () {
    registerCustomer();
})

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
        customerId:"C005",
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
        customerId:"C005",
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
             alert("Cant update your Details in this moment")
         }
     },

 });
}

/*function cleanRegisterForm() {
    $('#register-form-name,#register-form-nic,#register-form-email,#register-form-mobile, #register-form-address,#register-form-user-name ,#register-form-password,#register-form-drivingNo').css({
        border: '1px solid gray',
    })
    $('#register-form-name,#register-form-nic,#register-form-email,#register-form-mobile, #register-form-address,#register-form-user-name ,#register-form-password,#register-form-drivingNo').val("")

}*/


/*function openCustomerHome(data){
    $("#registerForm").css("display", "none")

    $("#customer").css("display", "block")
    $("#customerNavbar").css("display", "block")

    $("#customer-profile-nic").val(data.nic)
    $("#customer-profile-name").val(data.user_name)
    $("#customer-profile-email").val(data.email)
    $("#customer-profile-address").val(data.address)
    $("#customer-profile-mobile").val(data.mobile)
}*/

/*function loadImage(){
    var data = new FormData();

    let file = $("#driverOrDrivingImg")[0].files[0];
    let nicFileName = $("#driverOrDrivingImg")[0].files[0].name;

    data.append("myFile", file, nicFileName);

    $.ajax({
        url: baseUrl + "api/v1/upload",
        method: 'post',
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (resp) {
            alert("Successfully Uploaded");
            //loadTheLastUploadedImage();
        },
        error: function (err) {
            console.log(err);
        }
    });
}*/


/*function loadAllCustomers(){
    $("#admin-customer-table").empty();

    $.ajax({
        url: baseUrl + "customer",
        method: "GET",
        success: function (resp){
            for (const customer of resp.data){
                let row = `<tr><td>${customer.name}</td><td>${customer.nic}</td><td>${customer.address}</td><td>${customer.contactNumber}</td><td>${customer.email}</td><td>${customer.imageLocation}</td></tr>`;
                $("#admin-customer-table").append(row);

                $("#admin-customer-table>tr").off("click");
                $("#admin-customer-table>tr").click(function (){
                    customer_nic = $(this).children(":eq(1)").text();
                    console.log(customer_nic)
                    $("#admin-customer-viewBtn").prop('disabled',false);
                });
            }
        }
    })
}*/


/*

$("#admin-customer-viewBtn").click(function () {
    if (customer_nic == null) {
        return
    }

    $.ajax({
        url: baseUrl + "customer/customerDetail/" + customer_nic,
        method: "GET",
        success: function (resp) {

            if (resp.code === 200) {
                // console.log("view buttn nic: ", customer_nic)
                //console.log(resp,"pressed success")
                setDataToViewCustomerModal(resp.data);
                // console.log(resp.data);
            }
        },
        error: function (err) {
            // console.log(resp,"error success")
            console.log(err);
        }
    });
})
*/

/*
function setDataToViewCustomerModal(data) {
    $("#admin-view-customer-nic").val(data.nic)
    $("#admin-view-customer-address").val(data.address)
    $("#admin-view-customer-email").val(data.email)
    $("#admin-view-customer-mobile").val(data.contactNumber)
    $("#admin-view-customer-name").val(data.name)
    //  $("#admin-view-customer-registerDate").val(data.register_date)
    $("#admin-view-customer-imgOne").attr("src", baseUrl + data.imageLocation)


}
*/

