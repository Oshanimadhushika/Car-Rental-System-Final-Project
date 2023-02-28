/*==================================================*/
/*                     Driver                       */
/*==================================================*/
//for the Loading Window
$(window).on('load',function () {
    $('#spaDriverLogin').css('display', 'block');
    $('#spaDriverSchedule').css('display', 'none');
});

/*
$('#btnDriverLogin1').click(function (){
    $('#spaDriverLogin').css('display', 'none');
    $('#spaDriverSchedule').css('display', 'block');
});
*/

/*$('#navDriverScheduleHome').click(function (){
    $('#spaMainIndex').css('display', 'block');
    $('#spaCarStoreIndex').css('display', 'none');
    $('#spaCartIndex').css('display','none');
    $('#spaCarDetailsIndex').css('display','none');
    $('#spaOverviewIndex').css('display','none');
    $('#spaSignupIndex').css('display','none');
    $('#spaLoginIndex').css('display','none');
});*/

$('#navDriverHome').click(function (){
    $('#spaMainIndex').css('display','block');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
});


$('#navDriverLoginHomeHome').click(function (){
    $('#spaMainIndex').css('display','block');
    $('#spaCarStore').css('display','none');
    $('#spaCart').css('display','none');
    $('#spaOverview').css('display','none');
    $('#spaCarDetail').css('display','none');
    $('#spaLogin').css('display','none');
    $('#spaRegister').css('display','none');
});