var baseUrl="http://localhost:8080/back_end_war_exploded/";

var customer;
var customer_nic;

$('#btnAddDriver').click(function () {
    saveDriver();
    clearAllDriver();

})


$('#btnUpdateDriver').click(function () {
    updateDriver();
    clearAllDriver();


})

function saveDriver(){
    var driverDTO = {
        driverId: $("#DriverId").val(),
        name: $("#DriverName").val(),
        address: $("#DriverAddress").val(),
        dob: $("#DriverDob").val(),
        drivingLicenseNumber: $("#DriverLicenseNumber").val(),
        nic: $("#DriverNic").val(),
        status:"available"


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
            }bindRowClickEvents();
        }
    });

}

function updateDriver(){
    var newDetails = {
        driverId: $("#DriverId").val(),
        name: $("#DriverName").val(),
        address: $("#DriverAddress").val(),
        dob: $("#DriverDob").val(),
        nic: $("#DriverNic").val(),
        drivingLicenseNumber: $("#DriverLicenseNumber").val()

    }

    $.ajax({
        url: baseUrl + "driver",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(newDetails),
        success: function (res) {
            if (res.status === 200) {
                alert(res.message)
            } else {
                alert("Updated..!")
            }
        }
    });

}

function bindRowClickEvents() {
    $("#tableViewDriver>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let dob = $(this).children(":eq(3)").text();
        let nic = $(this).children(":eq(4)").text();
        let license = $(this).children(":eq(5)").text();

        $('#DriverId').val(id);
        $('#DriverName').val(name);
        $('#DriverAddress').val(address);
        $('#DriverDob').val(dob);
        $('#DriverNic').val(nic);
        $('#DriverLicenseNumber').val(license);

    });
}


$("#btnDeleteDriver").click(function (){
    $.ajax({
        url:baseUrl+"driver?driverId="+$("#DriverId").val(),
        method:"delete",
        success(resp){
            alert(resp.message);
            loadAllDrivers();

        }
    });
    clearAllDriver();
});

function clearAllDriver() {

    $('#DriverId').val("");
    $('#DriverName').val("");
    $('#DriverAddress').val("");
    $('#DriverDob').val("");
    $('#DriverLicenseNumber').val("");
    $('#DriverNic').val("");

}