
/*==================================================*/
/*                     Admin                        */
/*==================================================*/
$('#navReservation').click(function (){
    $('#adminMainSpa').css('display', 'none');
    $('#adminReservationSpa').css('display', 'block');
    $('#adminAddVehicleSpa').css('display', 'none');
    $('#adminViewVehicleSpa').css('display', 'none');
    $('#adminVehicleScheduleSpa').css('display', 'none');
    $('#adminCustomerReservationSpa').css('display', 'none');
    $('#adminViewDriverSpa').css('display', 'none');
    $('#adminDriverScheduleSpa').css('display', 'none');
    $('#adminPaymentsSpa').css('display', 'none');
    $('#adminFooterSpa').css('display', 'none');
    $('#spaAdminViewAllCustomer').css('display', 'none');
    $('#spaAdminLogin').css('display', 'none');



});

$('#navDashboard').click(function (){
    $('#adminMainSpa').css('display', 'block');
    $('#adminReservationSpa').css('display', 'none');
    $('#adminAddVehicleSpa').css('display', 'none');
    $('#adminViewVehicleSpa').css('display', 'none');
    $('#adminVehicleScheduleSpa').css('display', 'none');
    $('#adminCustomerReservationSpa').css('display', 'none');
    $('#adminViewDriverSpa').css('display', 'none');
    $('#adminDriverScheduleSpa').css('display', 'none');
    $('#adminPaymentsSpa').css('display', 'none');
    $('#adminFooterSpa').css('display', 'block');
    $('#spaAdminViewAllCustomer').css('display', 'none');
    $('#spaAdminLogin').css('display', 'none');



});

$('#navAddVehicle').click(function (){
    $('#adminMainSpa').css('display', 'none');
    $('#adminReservationSpa').css('display', 'none');
    $('#adminAddVehicleSpa').css('display', 'block');
    $('#adminViewVehicleSpa').css('display', 'none');
    $('#adminVehicleScheduleSpa').css('display', 'none');
    $('#adminCustomerReservationSpa').css('display', 'none');
    $('#adminViewDriverSpa').css('display', 'none');
    $('#adminDriverScheduleSpa').css('display', 'none');
    $('#adminPaymentsSpa').css('display', 'none');
    $('#adminFooterSpa').css('display', 'none');
    $('#spaAdminViewAllCustomer').css('display', 'none');
    $('#spaAdminLogin').css('display', 'none');


});

$('#navViewVehicle').click(function (){
    $('#adminMainSpa').css('display', 'none');
    $('#adminReservationSpa').css('display', 'none');
    $('#adminAddVehicleSpa').css('display', 'none');
    $('#adminViewVehicleSpa').css('display', 'block');
    $('#adminVehicleScheduleSpa').css('display', 'none');
    $('#adminCustomerReservationSpa').css('display', 'none');
    $('#adminViewDriverSpa').css('display', 'none');
    $('#adminDriverScheduleSpa').css('display', 'none');
    $('#adminPaymentsSpa').css('display', 'none');
    $('#adminFooterSpa').css('display', 'none');
    $('#spaAdminViewAllCustomer').css('display', 'none');
    $('#spaAdminLogin').css('display', 'none');


    viewVehicle("allCarDetail");

});

$('#navViewSchedule').click(function (){
    $('#adminMainSpa').css('display', 'none');
    $('#adminReservationSpa').css('display', 'none');
    $('#adminAddVehicleSpa').css('display', 'none');
    $('#adminViewVehicleSpa').css('display', 'none');
    $('#adminVehicleScheduleSpa').css('display', 'block');
    $('#adminCustomerReservationSpa').css('display', 'none');
    $('#adminViewDriverSpa').css('display', 'none');
    $('#adminDriverScheduleSpa').css('display', 'none');
    $('#adminPaymentsSpa').css('display', 'none');
    $('#adminFooterSpa').css('display', 'none');
    $('#spaAdminViewAllCustomer').css('display', 'none');
    $('#spaAdminLogin').css('display', 'none');


});

$('#navCustomerVerification').click(function (){
    $('#adminMainSpa').css('display', 'none');
    $('#adminReservationSpa').css('display', 'none');
    $('#adminAddVehicleSpa').css('display', 'none');
    $('#adminViewVehicleSpa').css('display', 'none');
    $('#adminVehicleScheduleSpa').css('display', 'none');
    $('#adminCustomerReservationSpa').css('display', 'block');
    $('#adminViewDriverSpa').css('display', 'none');
    $('#adminDriverScheduleSpa').css('display', 'none');
    $('#adminPaymentsSpa').css('display', 'none');
    $('#adminFooterSpa').css('display', 'none');
    $('#spaAdminViewAllCustomer').css('display', 'none');
    $('#spaAdminLogin').css('display', 'none');

});

$('#navViewAllCustomer').click(function (){
    $('#adminMainSpa').css('display', 'none');
    $('#adminReservationSpa').css('display', 'none');
    $('#adminAddVehicleSpa').css('display', 'none');
    $('#adminViewVehicleSpa').css('display', 'none');
    $('#adminVehicleScheduleSpa').css('display', 'none');
    $('#adminCustomerReservationSpa').css('display', 'none');
    $('#adminViewDriverSpa').css('display', 'none');
    $('#adminDriverScheduleSpa').css('display', 'none');
    $('#adminPaymentsSpa').css('display', 'none');
    $('#adminFooterSpa').css('display', 'none');
    $('#spaAdminViewAllCustomer').css('display', 'block');
    $('#spaAdminLogin').css('display', 'none');

    loadAllCustomers();
});



$('#navDriverSchedule').click(function (){
    $('#adminMainSpa').css('display', 'none');
    $('#adminReservationSpa').css('display', 'none');
    $('#adminAddVehicleSpa').css('display', 'none');
    $('#adminViewVehicleSpa').css('display', 'none');
    $('#adminVehicleScheduleSpa').css('display', 'none');
    $('#adminCustomerReservationSpa').css('display', 'none');
    $('#adminViewDriverSpa').css('display', 'none');
    $('#adminDriverScheduleSpa').css('display', 'block');
    $('#adminPaymentsSpa').css('display', 'none');
    $('#adminFooterSpa').css('display', 'none');
    $('#spaAdminViewAllCustomer').css('display', 'none');
    $('#spaAdminLogin').css('display', 'none');


});

$('#navViewDriver').click(function (){
    $('#adminMainSpa').css('display', 'none');
    $('#adminReservationSpa').css('display', 'none');
    $('#adminAddVehicleSpa').css('display', 'none');
    $('#adminViewVehicleSpa').css('display', 'none');
    $('#adminVehicleScheduleSpa').css('display', 'none');
    $('#adminCustomerReservationSpa').css('display', 'none');
    $('#adminViewDriverSpa').css('display', 'block');
    $('#adminDriverScheduleSpa').css('display', 'none');
    $('#adminPaymentsSpa').css('display', 'none');
    $('#adminFooterSpa').css('display', 'none');
    $('#spaAdminViewAllCustomer').css('display', 'none');
    $('#spaAdminLogin').css('display', 'none');

    loadAllDrivers();

});

$('#navPayments').click(function (){
    $('#adminMainSpa').css('display', 'none');
    $('#adminReservationSpa').css('display', 'none');
    $('#adminAddVehicleSpa').css('display', 'none');
    $('#adminViewVehicleSpa').css('display', 'none');
    $('#adminVehicleScheduleSpa').css('display', 'none');
    $('#adminCustomerReservationSpa').css('display', 'none');
    $('#adminViewDriverSpa').css('display', 'none');
    $('#adminDriverScheduleSpa').css('display', 'none');
    $('#adminPaymentsSpa').css('display', 'block');
    $('#adminFooterSpa').css('display', 'none');
    $('#spaAdminViewAllCustomer').css('display', 'none');
    $('#spaAdminLogin').css('display', 'none');


});
$('#navLogoutAdmin').click(function (){
    $("#HeaderFormCss").removeAttr("disabled");
    $("#LoginFormCss").attr("disabled","disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#CartCss").attr("disabled","disabled");
    $("#CarDetailCss").attr("disabled","disabled");
    $('#spaMainIndex').css('display','block');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');
    $('#spaAdminLogin').css('display', 'none');


});


//for the Loading Window
$(window).on('load',function () {

    $('#adminMainSpa').css('display', 'none');
    $('#adminReservationSpa').css('display', 'none');
    $('#adminAddVehicleSpa').css('display', 'none');
    $('#adminViewVehicleSpa').css('display', 'none');
    $('#adminVehicleScheduleSpa').css('display', 'none');
    $('#adminCustomerReservationSpa').css('display', 'none');
    $('#adminViewDriverSpa').css('display', 'none');
    $('#adminDriverScheduleSpa').css('display', 'none');
    $('#adminPaymentsSpa').css('display', 'none');
    $('#spaAdminViewAllCustomer').css('display', 'none');
    $('#sidebar').css('display', 'none');
    $('#spaAdminLogin').css('display', 'block');

});