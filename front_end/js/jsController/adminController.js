$('#btnAdminLogin1').click(function (){
    let userName = $('#admin-user-name').val();
    let password = $('#admin-password').val();

    $.ajax({
        url: baseUrl + "admin?userName=" + userName,
        method: "GET",
        success: function (resp) {
            console.log(resp.userName + "=" + resp.data.userName)
            console.log(resp.userName + "=" + userName)
            if (resp.data.userName === userName && resp.data.password === password) {

                $('#adminMainSpa').css('display', 'block');
                $('#adminReservationSpa').css('display', 'none');
                $('#adminAddVehicleSpa').css('display', 'none');
                $('#adminViewVehicleSpa').css('display', 'none');
                $('#adminVehicleScheduleSpa').css('display', 'none');
                $('#adminCustomerReservationSpa').css('display', 'none');
                $('#adminViewDriverSpa').css('display', 'none');
                $('#adminDriverScheduleSpa').css('display', 'none');
                $('#adminPaymentsSpa').css('display', 'none');
                $('#spaAdminViewAllCustomer').css('display', 'none');
                $('#sidebar').css('display', 'block');
                $('#spaAdminLogin').css('display', 'none');
            } else {
                alert("Username or Password Incorrect!.");
            }

        }
    });
});