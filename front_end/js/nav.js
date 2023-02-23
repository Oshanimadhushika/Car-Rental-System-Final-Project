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
})

/*Log In Home*/

$('#navindexLogIn').click(function () {
    $("#LoginFormCss").removeAttr("disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#CarStoreCss").attr("disabled","disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','block');
    $('#spaRegister').css('display','none');
})

/*See More Car Home */
$('#Seemore').click(function () {
    $("#CarStoreCss").removeAttr("disabled");
    $("#RegisterFormCss").attr("disabled","disabled");
    $("#HeaderFormCss").attr("disabled","disabled");
    $("#LoginFormCss").attr("disabled","disabled");
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','block');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
})

/*Book Now Home*/
$('#bookNowBtn').click(function () {
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','block');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
})


/*======================Car Store=========================*/

$('#navHomeCarStore').click(function () {
    $('#spaMainIndex').css('display','block');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
})

$('#goToCartButton').click(function () {
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','block');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
})

/*DetailViewIcon*/
$('#iconDetailView').click(function () {
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','block');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
})

/*============================Login ===============================*/
/*Home Login*/
$('#navHomeLogin').click(function () {
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
})


$('#navCarstoreLogin').click(function () {
    $('#spaMainIndex').css('display','none');
    $('#spaCarStore').css('display','block');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
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
})
