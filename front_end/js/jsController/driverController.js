var baseUrl="http://localhost:8080/car-rental/";

var customer;
var customer_nic;

$('#btnAddDriver').click(function () {
    alert("hellooooo")
    saveDriver();
})

function saveDriver(){
    var driverDTO = {
        driverId: $("#DriverId").val(),
        name: $("#DriverName").val(),
        address: $("#DriverAddress").val(),
        dob: $("#DriverDob").val(),
        drivingLicenseNumber: $("#DriverLicenseNumber").val(),
        nic: $("#DriverNic").val(),
        status:""

    }

    $.ajax({
        url: baseUrl + "driver",
        method: "post",
        contentType: "application/json",
        data: JSON.stringify(driverDTO),
        success: function (res){
            if (res.status==200){
                alert(res.message);
                loadAllDrivers();
            }
        },

        error: function(ob){
            alert(ob.responseJSON.message);
            console.log(ob.responseJSON.message)
        }
    });
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
