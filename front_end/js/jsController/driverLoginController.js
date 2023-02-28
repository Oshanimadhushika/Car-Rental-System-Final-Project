var baseUrl="http://localhost:8080/back_end_war_exploded/";

$('#btnDriverLogin1').click(function (){
    alert("ok");
    let userName = $('#driver-user-name').val();
    let password = $('#driver-password').val();

    $.ajax({
        url: baseUrl + "driverLogin?userName=" + userName,
        method: "GET",
        success: function (resp) {
            console.log(resp.userName + "=" + resp.data.userName)
            console.log(resp.userName + "=" + userName)
            if (resp.data.userName === userName && resp.data.password === password) {

                $('#spaDriverLogin').css('display', 'none');
                $('#spaDriverSchedule').css('display', 'block');
            } else {
                alert("Username or Password Incorrect!.");
            }

        }
    });
});