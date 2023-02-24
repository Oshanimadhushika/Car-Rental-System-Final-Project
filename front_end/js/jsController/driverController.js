var baseUrl="http://localhost:8080/car-rental/";

var customer;
var customer_nic;

$('#btnAddDriver').click(function () {
    alert("hellooooo")
    saveDriver();
})

function saveDriver() {
    alert("saveeee")
   /* let nicFileName = $("#nicOrDrivingImg")[0].files[0].name;*/

    let driverId=$("#DriverId").val();
    let name= $("#DriverName").val();
    let address=$("#DriverAddress")
    let dob =  $("#DriverDob").val();
    let drivingLicenseNumber = $("#DriverLicenseNumber").val();
    let nic =$("#DriverNic").val();

   /* let status= $("#drivingLicenseSignIn").val();*/



    var newDetails = {
        driverId:driverId,
        name: name,
        address:address,
        dob: dob,
        drivingLicenseNumber: drivingLicenseNumber,
        nic: nic,
        status:"Available"
    }

    $.ajax({
        url: baseUrl+"driver",
        method :"post",
        data : JSON.stringify(newDetails),
        contentType:"application/json",
        success: function (resp) {
            console.log(resp);
            alert(resp.message);
            loadAllDrivers();
           /* navToLogIn(resp.data);*/
            /* loadImage();*/

        },

    });


    /* cleanRegisterForm();*/
}
function loadAllDrivers(){
    $("#tableViewDriver").empty();

    $.ajax({
        url: baseUrl + "driver",
        method: "GET",
        success: function (resp) {
            for (const driver of resp.data) {
                let row = `<tr><td>${driver.driverId}</td><td>${driver.name}</td><td>${driver.address}</td><td>${driver.dob}</td><td>${driver.nic}</td><td>${driver.drivingLicenseNumber}</td><td>${driver.status}</td></tr>`;
                $("#tableViewDriver").append(row);

                $("#tableViewDriver>tr").off("click");
                $("#tableViewDriver>tr").click(function () {
                    driver_nic = $(this).children(":eq(0)").text();
                    $("#navViewDriver").prop('disabled', false);
                });
            }
        }
    });
}
