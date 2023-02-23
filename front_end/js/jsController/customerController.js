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
/*function cleanRegisterForm() {
    $('#register-form-name,#register-form-nic,#register-form-email,#register-form-mobile, #register-form-address,#register-form-user-name ,#register-form-password,#register-form-drivingNo').css({
        border: '1px solid gray',
    })
    $('#register-form-name,#register-form-nic,#register-form-email,#register-form-mobile, #register-form-address,#register-form-user-name ,#register-form-password,#register-form-drivingNo').val("")

}*/
function navToLogIn(data) {

        $('#spaMainIndex').css('display','none');
        $('#spaCarStore').css('display','none');
        $('#spaCart').css('display','none');
        $('#spaOverview').css('display','none');
        $('#spaCarDetail').css('display','none');
        $('#spaLogin').css('display','block');
        $('#spaRegister').css('display','none');

}
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
$("#customer-updateBtn").click(function (){
    updateCustomer();
})
*/

/*
function updateCustomer(){

    var newDetails = {
        nic: $("#customer-profile-nic").val(),
        address: $("#customer-profile-address").val(),
        contactNumber: $("#customer-profile-mobile").val(),
        name: $("#customer-profile-name").val(),
        email: $("#customer-profile-email").val(),
        password: customer.password,
        user_name: customer.user_name,
        imageLocation: customer.imageLocation,
    }
*/

   /* $.ajax({
        url: baseUrl + "customer/updateCustomer",
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
        error: function (ob) {
            console.log(ob.responseJSON.message);
        }
    });
}*/
/*

$("#admin-customer-viewBtn").click(function () {    // me mona button eke action ekada? ethakota e button eka click karamada values tike enna ona? ara table eke tynwane sir data eke ekk click klama ara view detail ekn e customerge full dettails blnn teynne..image ekaema
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

