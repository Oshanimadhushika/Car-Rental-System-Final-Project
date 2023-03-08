
/*nav call*/
function pickups() {
    $("#adminReservationAccept").empty();

    $.ajax({
        url: baseUrl + "reservation/detail",
        method: "GET",
        success: function (resp) {

            for (const rental of resp.data) {
                // console.log(rental.rentalId)
                var row = `<tr style="border-bottom: 1px solid #d9d9d9">
                                <th scope="row">${rental.customer.customerId}</th>
                                <td>${rental.driverId}</td>
                                <td>${rental.car.registrationId}</td>
                                <td>${rental.pickupDate}</td>
                                <td>${rental.returnDate}</td>
                                <td>${rental.pickupLocation}</td>
                                <td>${rental.returnLocation}</td>
<!--                                <td><a class="text-primary fw-bold">View Image</a></td>-->
                                     <td><a href=${"http://localhost:8080/back_end_war_exploded/" + rental.bankSlip} target="_blank">
                                     <img src=${"http://localhost:8080/back_end_war_exploded/" + rental.bankSlip} alt=""></a></td>                                <td>
                                    <ul style="display: inline-block">
                                        <li>
                                            <span>Accept &nbsp;&nbsp;</span>
                                            <i data-btnAc="${rental.rentalId}" class="bi bi-check-circle btnAccept" style="color: limegreen; font-size: 20px"></i>

                                        </li>
                                        <li>
                                            <span>Deny &nbsp;&nbsp; &nbsp;</span>
                                            <i data-btnDny="${rental.rentalId}" class="bi bi-x-circle btnDeny" style="color: orangered; font-size: 20px"></i>

                                        </li>
                                    </ul>
                                </td>
                            </tr>`


                $("#adminReservationAccept").append(row);


            }
            acceptClick();
            denyClick();
        }

    });


}

function acceptClick() {
    $(".btnAccept").click(function () {
        let rAId=$(this).attr("data-btnAc");


        var accept={
            rentalId:rAId,
            reservationStatus: "Accepted"
        }
        console.log(rAId);

        $.ajax({
            url: baseUrl + "reservation",
            method: "put",
            contentType: "application/json",
            data: JSON.stringify(accept),
            success: function (res) {
                if (res.status === 200) {
                    alert(res.message)
                } else {
                    alert('Updated!');
                }
            }
        });

    })

}

function denyClick() {
    $(".btnDeny").click(function () {
        let rDId=$(this).attr("data-btnDny");
        var deny={
            rentalId:rDId,
            reservationStatus: "Not-Allowed"
        }
        console.log(rDId);

        $.ajax({
            url: baseUrl + "reservation",
            method: "put",
            contentType: "application/json",
            data: JSON.stringify(deny),
            success: function (res) {
                if (res.status === 200) {
                    alert(res.message)
                } else {
                    alert('Updated!');
                }
            }
        });

    })
}