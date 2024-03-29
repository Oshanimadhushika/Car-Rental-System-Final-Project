var baseUrl="http://localhost:8080/back_end_war_exploded/";

var vNameAr=[];
$("#btnAddVehicle").click(function () {
    let registrationId1 = $("#txtRegiNumberCar").val();

    saveCar()
    clearAllVehicle();
})

$("#btnUpdateVehicle").click(function () {
  updateVehicle()
    clearTextViewVehicle()
    loadAllViewVehicle()

})


function saveCar() {
    var Vdata = new FormData();

    let frontFileName =$("#ImgFrontView")[0].files[0].name;
    let backFileName = $("#ImgBackView")[0].files[0].name;
    let sideFileName = $("#ImgSideView")[0].files[0].name;
    let interiorFileName =$("#ImgInteriorView")[0].files[0].name;

    let vFrontImg =$("#ImgFrontView")[0].files[0]
    let vBackImg =$("#ImgBackView")[0].files[0]
    let vSideImg =$("#ImgSideView")[0].files[0]
    let vInteriorImg =$("#ImgInteriorView")[0].files[0]


    let registrationId = $("#txtRegiNumberCar").val();
    let brand = $("#txtBrand").val();
    let type = $("#txtType").val();
    let model = $("#txtModel").val();
    let transmissionType = $("#txtTransmission").val();
    let color = $("#txtColour").val();
    let noOfPassenger = $("#txtNoOfPassenger").val();
    let lastServiceMileage = $("#txtLastServiceMileage").val();
    let freeServiceMileage = $("#txtFreeMileage").val();
    let fuelType = $("#txtFuel").val();
    let dailyRate = $("#txtDailyRate").val();
    let monthlyRate = $("#txtMonthlyRate").val();
    let priceForExtraKm = $("#txtPriceForExKm").val();
    let availability =$("#txtAvailabilty").val();
    let image1 = frontFileName;
    let image2 = backFileName;
    let image3 = sideFileName;
    let image4 = interiorFileName;
    let damageCost=$("#txtDamageCost").val();



    var CarDTO = {
        registrationId: registrationId,
        brand: brand,
        type: type,
        model: model,
        transmissionType: transmissionType,
        color: color,
        noOfPassenger: noOfPassenger,
        lastServiceMileage: lastServiceMileage,
        freeServiceMileage: freeServiceMileage,
        fuelType: fuelType,
        dailyRate: dailyRate,
        monthlyRate: monthlyRate,
        priceForExtraKm: priceForExtraKm,
        availability: availability,
        image1:"uploads/"+ image1,
        image2:"uploads/"+ image2,
        image3:"uploads/"+ image3,
        image4:"uploads/"+ image4,
        damageCost:damageCost
    }

    Vdata.append("vImageFile" , vFrontImg)
    Vdata.append("vImageFile" , vBackImg)
    Vdata.append("vImageFile" , vSideImg)
    Vdata.append("vImageFile" , vInteriorImg)
    Vdata.append("vehicle", new Blob([JSON.stringify(CarDTO)], {type: "application/json"}))


    $.ajax({
        url: baseUrl + "car",
        method: "post",
        async: true,
        contentType: false,
        processData: false,
        data: Vdata,
        success: function (resp) {
            if (resp.status === 200) {
                alert(resp.message);
                // loadAllCars("allCarDetail");

                uploadCarImages(registrationId);

            }
        },
        error: function (err) {
            alert(err.responseJSON.message)
            console.log(err);
        }
    });
    //clearSaveCarForm();
}



function uploadCarImages(registrationId) {

    let frontViewFile = $("#ImgFrontView")[0].files[0];
    let backViewFile = $("#ImgBackView")[0].files[0];
    let sideViewFile = $("#ImgSideView")[0].files[0];
    let interiorViewFile = $("#ImgInteriorView")[0].files[0];

    let frontFileName = registrationId + "-image1-" + $("#ImgFrontView")[0].files[0].name;
    let backFileName = registrationId + "-image2-" + $("#ImgBackView")[0].files[0].name;
    let sideFileName = registrationId + "-image3-" + $("#ImgSideView")[0].files[0].name;
    let interiorFileName = registrationId + "-image4-" + $("#ImgInteriorView")[0].files[0].name;


    var data = new FormData();

    data.append("image1", frontViewFile, frontFileName);
    data.append("image2", backViewFile, backFileName);
    data.append("image3", sideViewFile, sideFileName);
    data.append("image4", interiorViewFile, interiorFileName);


    $.ajax({
        url: baseUrl + "car/uploadImg/" + registrationId,
        method: "Post",
        async: true,
        contentType: false,
        processData: false,
        data: data,
        success: function (res) {
            console.log("Uploaded");
           /* Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Images Upload Successfully",
                showConfirmButton: false,
                timer: 1500
            });*/
        },
        error: function (error) {
            let errorReason = JSON.parse(error.responseText);
         /*   Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: "Images Not Upload Successfully",
                showConfirmButton: false,
                timer: 1500
            });*/
        }
    });
}


function loadAllCars(path) {
    $("#cusLuxCarContainer").empty();

    $.ajax({
        url: baseUrl + "car/" + path,
        method: "GET",
        success: function (resp) {
            for (const car of resp.data) {

                console.log((car.image3))

                let div=`<div class="col-xl-4 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in"
                         data-aos-delay="100">
                        <div class="icon-box">

                            <!--Title/V Name-->
                            <div class="row">
                                <div class="d-flex justify-content-center">
                                    <div class="icon">
                                    <img alt="" src=${"http://localhost:8080/back_end_war_exploded/"+car.image3}  style="width: 250px;height: 175px"></i></div>
                                </div>
                            </div>


                            <!--Title/V Name-->
                            <div class="row">
                                <div class="d-flex justify-content-center">
                                    <h4><a href="">${car.brand}</a></h4>
                                </div>
                            </div>


                            <!--Type-->
                            <div class="row">
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline">
                                    Hybrid</h6>
                                <h6 class="d-flex justify-content-center col-xl-6" style="display: inline">
                                    Manual</h6>
                            </div>

                            <!--Line-->
                            <div id="lineHome"></div>

                            <div class="row">
                                <div class="d-flex ">
                                    <p style="color: black; font-size: 30px;align-items: center;" class="mt-5 mb-3 ps-4 justify-content-center">${car.model}</p>
                                </div>
                            </div>


                            <!--Price-->
                            <div class="row">
                                <div class="d-flex align-items-sm-stretch col-xl-4 text-danger justify-content-center"
                                     style="font-weight: 900">${car.monthlyRate}
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 text-danger justify-content-center"
                                     style="font-weight: 900">${car.dailyRate}
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 text-danger justify-content-center"
                                     style="font-weight: 900">${car.damageCost}
                                </div>
                            </div>
                            <div class="row">
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center"
                                     style="font-size: 13px">Monthly Rate
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center"
                                     style="font-size: 13px">Daily Rate
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center"
                                     style="font-size: 13px">On Hold
                                </div>
                            </div>


<!--Button-->
                            <div class="row mt-3">
                                <div class="d-flex align-items-sm-stretch col-xl-8 justify-content-around">
                                    <button data-dtaImg="${car.image3}"  data-dtaDailyRate="${car.dailyRate}" data-dtaMonthlyRate="${car.monthlyRate}" data-dtaWawier="${car.damageCost}" data-btnRentIt="${car.model}" data-registrationId="${car.registrationId}"  class="btn_RentIt">RENT IT</button>
                                  </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center">
<!--
                                    <img alt="" class="carStoreIndexCarDetailIcon" height="35" src="asserts/image/icons8-popup-50.png" width="35">
-->
                                </div>
                            </div>


                        </div>
                    </div>`;

               if (car.type==="Luxury") {

                   $("#cusLuxCarContainer").append(div);

               }else  if(car.type==="Premium"){

                   $("#cusPreCarContainer").append(div);
               }else if(car.type==="General"){

                   $("#cusGenCarContainer").append(div);
               }


            }
            rentItClick()

        }
    });


}


function rentItClick() {
    const buttons = document.querySelectorAll('.btn_RentIt');


    $(".btn_RentIt").click(function () {
        var bgColor = $(this).css("background-color");
        console.log(bgColor)

        console.log($(this).attr("data-btnRentIt"));
        setBrandToArray(this);


        if (colorsAreEqual(bgColor, "rgb(68, 68, 68)")) { //firstTime With hover
            $(this).text("Added");
            $(this).css({
                "background": "#D50137",
                "color": "#ffffff"
            });
        } else if (colorsAreEqual(bgColor, "rgb(213, 1, 55)")) { //red
            $(this).text("Rent It");
            $(this).css({
                "background": "#F7F7F7",
                "color": "#444444",
            });
        } else if (colorsAreEqual(bgColor, "rgb(247, 247, 247)")) { //red turn to past value
            $(this).text("Added");
            $(this).css({
                "background": "#D50137",
                "color": "#ffffff"
            });
        }
    })

}

function colorsAreEqual(color1, color2) {
    var rgb1 = color1.match(/\d+/g);  // Get the RGB values of color1
    var rgb2 = color2.match(/\d+/g);  // Get the RGB values of color2
    if (rgb1.length !== 3 || rgb2.length !== 3) {
        return false;  // Invalid input - not a valid color
    }
    for (var i = 0; i < 3; i++) {
        if (parseInt(rgb1[i]) !== parseInt(rgb2[i])) {
            return false;  // The colors are not equal
        }
    }
    return true;
}


function setBrandToArray(param) {
    let bool = true;
    let isDateAdd = false;

    var rDate = "";
    var pDate = "";

    if ($("#lux-car_Store_pickup_date").val() && $("#lux-car_Store_Return_date").val()) {

        isDateAdd = true;
        pDate = $("#lux-car_Store_pickup_date").val();
        rDate = $("#lux-car_Store_Return_date").val();

    } else if ($("#premiumCar_Store_pickup_date").val() && $("#premiumCar_Store_Return_date").val()) {

        isDateAdd = true;
        pDate = $("#premiumCar_Store_pickup_date").val()
        rDate = $("#premiumCar_Store_Return_date").val();

    } else if ($("#car_Store_pickup_date").val() && $("#car_Store_Return_date").val()) {

        isDateAdd = true;
        pDate = $("#car_Store_pickup_date").val()
        rDate = $("#car_Store_Return_date").val()
    }


    var cus = {
        model: $(param).attr("data-btnRentIt"),
        imag: $(param).attr("data-dtaImg"),
        dRate: $(param).attr("data-dtaDailyRate"),
        mRate: $(param).attr("data-dtaMonthlyRate"),
        dWaiver: $(param).attr("data-dtaWawier"),
        tnRent: $(param).attr("data-btnRentIt"),
        pickupD: pDate,
        returnD: rDate,
        btnR: param,
        regId:$(param).attr("data-registrationId")
    }

    for (let i = 0; i < vNameAr.length; i++) {
        console.log(vNameAr[i].model + "===" + $(param).attr("data-btnRentIt"));
        if (vNameAr[i].model === $(param).attr("data-btnRentIt")) {

            bool = false;
        }
    }


    if (bool) {

        vNameAr.push(cus);
    } else {


        for (var i = 0; i < vNameAr.length; i++) {
            if (vNameAr[i].model === $(param).attr("data-btnRentIt")) {
                vNameAr.splice(i, 1);
                break;
            }
        }

    }





}


/*-------------------------------
*    send data to the cart
* ------------------------------*/
function sendVehicleNameToCart() {
    return vNameAr;
}

function loadAllViewVehicle(path){
    $("#tableViewVehicle").empty();

    $.ajax({
        url: baseUrl +"car/" + path,
        method: "GET",
        success: function (resp) {

                lastServiceMileage=resp.lastServiceMileage;
                freeServiceMileage=resp.freeServiceMileage;
                fuelType=resp.fuelType;
                image1 = resp. image1;
                image2 =resp. image2;
                image3= resp.image3;
                image4 =resp. image4;
                noOfPassenger=resp.noOfPassenger;
                priceForExtraKm=resp.priceForExtraKm;
                transmissionType=resp.transmissionType;
                type=resp.type;

            for (const car of resp.data) {
                let row = `<tr><td>${car.registrationId}</td><td>${car.brand}</td><td>${car.model}</td><td>${car.dailyRate}</td><td>${car.monthlyRate}</td><td>${car.damageCost}</td><td>${car.color}</td><td>${car.availability}</td></tr>`;
                $("#tableViewVehicle").append(row);

                $("#tableViewVehicle>tr").off("click");
                $("#tableViewVehicle>tr").click(function () {
                    driver_nic = $(this).children(":eq(0)").text();
                    $("#navViewVehicle").prop('disabled', false);
                });
            }bindRowClickEventsVehi();
        }
    });
}

function bindRowClickEventsVehi() {
    $("#tableViewVehicle>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let brand = $(this).children(":eq(1)").text();
        let model = $(this).children(":eq(2)").text();
        let dR = $(this).children(":eq(3)").text();
        let mR = $(this).children(":eq(4)").text();
        let damageWaiver = $(this).children(":eq(5)").text();
        let colour = $(this).children(":eq(6)").text();
        let status = $(this).children(":eq(7)").text();

        $('#txtVehiIdViewVehicle').val(id);
        $('#txtBrandViewVehicle').val(brand);
        $('#txtModelViewVehi').val(model);
        $('#txtDailyRateViewVehi').val(dR);
        $('#txtMonthlyRateViewVehi').val(mR);
        $('#txtDamageCostViewVehi').val(damageWaiver);
        $('#txtColourViewVehi').val(colour);
        $('#txtAvailabiltyViewVehi').val(status);

    });
}

function updateVehicle(){

        let registrationId= $("#txtVehiIdViewVehicle").val();
        let brand= $("#txtBrandViewVehicle").val();
        let model= $("#txtModelViewVehi").val();
        let dailyRate= $("#txtDailyRateViewVehi").val();
        let monthlyRate= $("#txtMonthlyRateViewVehi").val();
        let damageCost= $("#txtDamageCostViewVehi").val();
        let color= $("#txtColourViewVehi").val();
        let availability= $("#txtAvailabiltyViewVehi").val();

        var newDetails = {
            registrationId:registrationId,
            brand:brand,
            model:model,
            dailyRate:dailyRate,
            monthlyRate:monthlyRate,
            damageCost:damageCost,
            color:color,
            availability:availability,


            lastServiceMileage :lastServiceMileage,
            freeServiceMileage:freeServiceMileage,
            fuelType:fuelType,
            image1 : image1,
            image2 : image2,
            image3 : image3,
            image4 : image4,
            noOfPassenger:noOfPassenger,
            priceForExtraKm:priceForExtraKm,
            transmissionType:transmissionType,
            type:type


    }

    $.ajax({
        url: baseUrl + "car",
        method: "put",
        contentType: "application/json",
        data: JSON.stringify(newDetails),
        success: function (res) {


            if (res.status === 200) {
                alert(res.message)
                loadAllViewVehicle();
            } else {
                alert("Updated")
            }

        }

    });
}

$("#btnDeleteVehicle").click(function (){
    $.ajax({
        url:baseUrl+"car?vehicleId="+$("#txtVehiIdViewVehicle").val(),
        method:"delete",
        success(resp){
            alert(resp.message);
            loadAllViewVehicle();
        }
    });
    clearTextViewVehicle()
});

function clearAllVehicle() {

    $('#txtRegiNumberCar,#txtBrand,#txtType,#txtModel,#txtTransmission,#txtColour,#txtNoOfPassenger,#txtLastServiceMileage,#txtFreeMileage,#txtFuel,#txtDailyRate,#txtMonthlyRate,#txtPriceForExKm,#txtDamageCost,#txtAvailabilty,#ImgFrontView,#ImgSideView,#ImgInteriorView,#ImgBackView').val("");

}

function clearTextViewVehicle() {
    $(`#txtVehiIdViewVehicle,#txtBrandViewVehicle,#txtModelViewVehi,#txtDailyRateViewVehi,#txtMonthlyRateViewVehi,#txtDamageCostViewVehi,#txtColourViewVehi,#txtAvailabiltyViewVehi`).val("");
}


















