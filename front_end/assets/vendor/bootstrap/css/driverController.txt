
var driver_nic;

$("#btnDriverSave").click(function (){

})

$("#admin-driverBtn").click(function () {
    $("#admin-all-drivers-title").css("display", "block")
    $("#admin-all-driverSchedule-title").css("display", "none")

    $("#admin-driver-table").css("display", "block")
    $("#admin-driver-schedule-table").css("display", "none")

    $("#enableSaveDriverBtn").css("display", "block");
    $("#enableSearchDriverBtn").css("visibility", "hidden");
    $("#admin-driver-viewDetailsBtn").css("visibility", "visible");

    loadAllDrivers()
})

$("#admin-scheduleBtn").click(function () {
    $("#admin-all-drivers-title").css("display", "none")
    $("#admin-all-driverSchedule-title").css("display", "block")

    $("#admin-driver-table").css("display", "none")
    $("#admin-driver-schedule-table").css("display", "block")

    $("#enableSaveDriverBtn").css("display", "none");
    $("#enableSearchDriverBtn").css("visibility", "visible");

    $("#admin-driver-viewDetailsBtn").css("visibility", "hidden");

    $("#admin-driver-start-date").val(today);
    $("#admin-driver-end-date").val(today);

    //loadDriverScheduleForAdmin();
})

$("#btnDriverSave").click(function (){
    saveDriver();
})

function saveDriver(){
    var driverDTO = {
        driverNic: $("#save-driver-nic").val(),
        driver_name: $("#save-driver-name").val(),
        address: $("#save-driver-address").val(),
        mobile: $("#save-driver-mobile").val(),
        license_no: $("#save-driver-license").val(),
        join_date: $("#save-driver-date").val(),
        user_name: $("#save-driver-user-name").val(),
        password: $("#save-driver-password").val(),
    }

    $.ajax({
        url: baseUrl + "driver",
        method: "POST",
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
    })

    clearDriversform();
}

function clearDriversform(){
    $('#save-driver-nic,#save-driver-name,#save-driver-address,#save-driver-license,#save-driver-mobile,#save-driver-date,#save-driver-user-name,#save-driver-password').css({
        border: '1px solid #c4c4c4',
    })
    $('#save-driver-nic,#save-driver-name,#save-driver-address,#save-driver-license,#save-driver-mobile,#save-driver-date,#save-driver-user-name,#save-driver-password').val("")
}

function loadAllDrivers(){
    $("#admin-all-drivers-table").empty();

    $.ajax({
        url: baseUrl + "driver/allDriverDetail",
        method: "GET",
        success: function (resp) {
            for (const driver of resp.data) {
                let row = `<tr><td>${driver.driverNic}</td><td>${driver.driver_name}</td><td>${driver.address}</td><td>${driver.mobile}</td><td>${driver.join_date}</td></tr>`;
                $("#admin-all-drivers-table").append(row);

                $("#admin-all-drivers-table>tr").off("click");
                $("#admin-all-drivers-table>tr").click(function () {
                    driver_nic = $(this).children(":eq(0)").text();
                    $("#admin-driver-viewDetailsBtn").prop('disabled', false);
                });
            }
        }
    });
}

function updateDriver(){
        var driver = {
            driverNic: $("#admin-update-driver-nic").val(),
            address: $("#admin-update-driver-address").val(),
            driver_name: $("#admin-update-driver-name").val(),
            join_date: $("#admin-update-driver-joinDate").val(),
            license_no: $("#admin-update-driver-license").val(),
            mobile: $("#admin-update-driver-mobile").val(),
            password: $("#admin-update-driver-password").val(),
            user_name: $("#admin-update-driver-userName").val(),
        }

        $.ajax({
            url: baseUrl + "driver/updateDriver",
            method: "PUT",
            contentType: "application/json",
            data: JSON.stringify(driver),
            success: function (resp) {
                if (resp.status === 200) {
                    alert(resp.message)
                    loadAllDrivers()
                }
            },
            error: function (err) {
                console.log(err);
            }
        });
        clearDriversform();
}

$("#btnUpdateDriver").click(function (){
    updateDriver();
})

$("#btnDeleteDriver").click(function (){
    let res = confirm("Do you really need to delete this Driver ?");
    if (res) {
        $("#updateDriverModel").modal("toggle");
        loadAllDrivers();
        clearDriversform()
    }
})

function setDataToVieDriverModal(data) {
    $("#admin-update-driver-userName").val(data.user_name)
    $("#admin-update-driver-name").val(data.driver_name)
    $("#admin-update-driver-address").val(data.address)
    $("#admin-update-driver-joinDate").val(data.join_date)
    $("#admin-update-driver-license").val(data.license_no)
    $("#admin-update-driver-mobile").val(data.mobile)
    $("#admin-update-driver-nic").val(data.driverNic)
    $("#admin-update-driver-password").val(data.password)
}

$("#admin-driver-viewDetailsBtn").click(function () {
    if (driver_nic == null) {
        return
    }
    $.ajax({
        url: baseUrl + "driver/driverDetail/" + driver_nic,
        method: "GET",
        success: function (resp) {
            if (resp.code === 200) {
                setDataToVieDriverModal(resp.data);
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
})
