//for the Loading Window
$(window).on('load',function () {
    $("#LoginFormCss").attr("disabled","disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#CartCss").attr("disabled","disabled");
    $("#CarDetailCss").attr("disabled","disabled");
    $('#spaMainIndex').css('display','block');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

    loadAllCars("allCarDetail");

})


/*Home Header*/
$('#navindexHome').click(function () {
    $('#spaMainIndex').css('display','block');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

})

/*Log In Home*/

$('#navindexLogIn').click(function () {
    $("#LoginFormCss").removeAttr("disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#CartCss").attr("disabled","disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','block');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

})

/*See More Car Home */
$('#Seemore').click(function () {
    $("#CarStoreCss").removeAttr("disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#CartCss").attr("disabled","disabled");
    $("#LoginFormCss").attr("disabled","disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','block');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

})

/*Book Now Home*/
$('#bookNowBtn').click(function () {
    $("#CarStoreCss").removeAttr("disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#CartCss").attr("disabled","disabled");
    $("#LoginFormCss").attr("disabled","disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','block');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

})


/*======================Car Store=========================*/

$('#navHomeCarStore').click(function () {

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

})
$('#navLogInCarStore').click(function () {
    $("#CartCss").attr("disabled","disabled");
    $("#CarDetailCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#LoginFormCss").removeAttr("disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','block');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

})

$('#goToCartButton1').click(function () {
    $("#LoginFormCss").removeAttr("disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#CartCss").attr("disabled","disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','block');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

})
$('#goToCartButton2').click(function () {
    $("#LoginFormCss").removeAttr("disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#CartCss").attr("disabled","disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','block');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');


})

$('#goToCartButton3').click(function () {
    $("#LoginFormCss").removeAttr("disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#CartCss").attr("disabled","disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','block');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');


})

/*DetailViewIcon*/
/*
$('.iconDetailView').click(function () {

    $("#CarDetailCss").removeAttr("disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#LoginFormCss").attr("disabled","disabled");
    $("#CartCss").attr("disabled","disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','block');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
})*/

/*============================Login ===============================*/
/*Home Login*/
$('#navHomeLogin').click(function () {
    $("#LoginFormCss").attr("disabled","disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#CartCss").attr("disabled","disabled");
    $("#CarDetailCss").attr("disabled","disabled");
    $("#LoginFormCss").attr("disabled","disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#HeaderFormCss").removeAttr("disabled");
    $('#spaMainIndex').css('display','block');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

})


$('#navCarstoreLogin').click(function () {
    $("#CartCss").attr("disabled","disabled");
    $("#CarDetailCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#LoginFormCss").removeAttr("disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','block');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

})

$('#RegisterBtnLogin').click(function () {
    $("#CartCss").attr("disabled","disabled");
    $("#CarDetailCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#LoginFormCss").removeAttr("disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','block');
    $('#spaUpdateIndex').css('display','none');

})

/*
$('#btnCustomerLogIn').click(function () {
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

})
*/


/*======================Cart=========================*/
$('#BtnSendRentalRequest').click(function () {
    $("#CartCss").removeAttr("disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#LoginFormCss").attr("disabled","disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','block');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

})

$('#navHomeCart').click(function () {
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

})


/*===========================OverView===========================*/
$('#navHomeOverview').click(function () {
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

})

$('#navCarStoreview').click(function () {
    $("#CarStoreCss").removeAttr("disabled");
    $("#LoginFormCss").attr("disabled","disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#CartCss").attr("disabled","disabled");
    $("#CarDetailCss").attr("disabled","disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','block');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

})
$('#navLogInOverview').click(function () {
    $("#CartCss").attr("disabled","disabled");
    $("#CarDetailCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#LoginFormCss").removeAttr("disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','block');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

})

$('#btnupdateInfoOver').click(function () {
    $("#CartCss").attr("disabled","disabled");
    $("#CarDetailCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#LoginFormCss").removeAttr("disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','block');


})
/*===========================Register==============================*/
$('#navHomeRegi').click(function () {
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

})

$('#navCarStoreRegi').click(function () {
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','block');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

})
$('#navLogInRegi').click(function () {
    $("#CartCss").attr("disabled","disabled");
    $("#CarDetailCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#LoginFormCss").removeAttr("disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','block');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

})

$('#BtnSignIn').click(function () {
    $("#CartCss").attr("disabled","disabled");
    $("#CarDetailCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#LoginFormCss").removeAttr("disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','block');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');

})

/*===========================CarDetail==============================*/
$('#navHomeCarDetail').click(function () {
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

})

$('#navCarStoreCarDetail').click(function () {
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','block');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');
    $('#spaUpdateIndex').css('display','none');


})
$('#navLogInCarDetail').click(function () {
    $("#CartCss").attr("disabled","disabled");
    $("#CarDetailCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#LoginFormCss").removeAttr("disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','block');
    $('#spaRegister').css('display','none');
    $('#spaUpdateIndex').css('display','none');


})

/*==================================Update Form===============================================*/
$('#navHomeUpdate').click(function () {
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

})
