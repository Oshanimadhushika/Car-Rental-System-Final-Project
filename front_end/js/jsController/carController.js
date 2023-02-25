var baseUrl="http://localhost:8080/car-rental/";
$("#btnAddVehicle").click(function () {
    saveCar();
})

function saveCar() {

    let frontFileName = $("#ImgFrontView")[0].files[0].name;
    let backFileName = $("#ImgBackView")[0].files[0].name;
    let sideFileName = $("#ImgSideView")[0].files[0].name;
    let interiorFileName = $("#ImgInteriorView")[0].files[0].name;


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
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4,
        damageCost:damageCost
    }

    $.ajax({
        url: baseUrl + "car",
        method: 'post',
        //async: true,
        contentType: "application/json",
        //processData: false,
        data: JSON.stringify(CarDTO),
        success: function (resp) {
            if (resp.status === 200) {
                alert(resp.message);
                // loadAllCars("allCarDetail");
                loadImage();

            }
        },
        error: function (err) {
            alert(err.responseJSON.message)
            console.log(err);
        }
    });
    //clearSaveCarForm();
}


function loadAllCars(path) {
    $("#cusLuxCarContainer").empty();

    $.ajax({
        url: baseUrl + "car/" + path,
        method: "GET",
        success: function (resp) {
            for (const car of resp.data) {

                let div=`<div class="col-xl-4 col-md-6 d-flex align-items-stretch mb-4" data-aos="zoom-in"
                         data-aos-delay="100">
                        <div class="icon-box">

                            <!--Title/V Name-->
                            <div class="row">
                                <div class="d-flex justify-content-center">
                                    <div class="icon">
                                    <img alt="" src=${car.image3}  style="width: 250px;height: 175px"></i></div>
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
                                    <p class="mt-5 mb-3 ps-4 justify-content-center">The Toyota Premio is a
                                        compact
                                        sedan known for comfort,
                                        technology, and efficiency</p>
                                </div>
                            </div>


                            <!--Price-->
                            <div class="row">
                                <div class="d-flex align-items-sm-stretch col-xl-4 text-danger justify-content-center"
                                     style="font-weight: 900">10,000
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 text-danger justify-content-center"
                                     style="font-weight: 900">227,000
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 text-danger justify-content-center"
                                     style="font-weight: 900">20,000
                                </div>
                            </div>
                            <div class="row">
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center"
                                     style="font-size: 13px">Per Day
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center"
                                     style="font-size: 13px">Per Month
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center"
                                     style="font-size: 13px">On Hold
                                </div>
                            </div>


<!--Button-->
                            <div class="row mt-3">
                                <div class="d-flex align-items-sm-stretch col-xl-8 justify-content-around">
                                    <button class="btn_RentIt">RENT IT</button>
                                </div>
                                <div class="d-flex align-items-sm-stretch col-xl-4 justify-content-center">
                                    <img alt="" class="carStoreIndexCarDetailIcon" height="35" src="asserts/image/icons8-popup-50.png" width="35">
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
        }
    });

}
function viewVehicle(path) {

    $("#ViewVehicleDiv").empty();

    $.ajax({
        url: baseUrl + "car/" + path,
        method: "GET",
        success: function (resp) {
            for (const car of resp.data) {

                let div=` <div class="col-xxl-4 col-md-12">
                            <div class="card info-card sales-card mt-5">

                                <div class="card-body" id="ViewVehicleMainDiv">
                                    <div class="d-flex align-items-center" style="margin-top: 5px; width:600px">
                                        <div class="col-sm-3" id="ImageVehicle">
                                            <img style="width: 152px;" src=${car.image3} alt="">
                                        </div>

                                        <div class="col-sm-3" id="DivModel" >
                                            <h6 id="ModelTopic" style="color: black; font-size: 15px; ">Model</h6>
                                            <p id="ModelName" style="font-size: 15px">${car.Modal}</p>
                                        </div>

                                        <div class="col-sm-3" id="DivDaily">
                                            <h6 id="DailyTopic" style="color: black; font-size: 15px">Daily</h6>
                                            <p id="DailyPrice" style="font-size: 15px">${car.dailyRate}</p>
                                        </div>

                                        <div class="col-sm-3" id="DivMonthly">
                                            <h6 id="MonthlyTopic" style="color: black; font-size: 15px">Monthly</h6>
                                            <p id="MonthlyPrice" style="font-size: 15px">${car.monthlyRate}</p>
                                        </div>

                                        <div class="col-sm-3" id="DivDamgeCost">
                                            <h6 id="DamageCostTopic" style="color: black; font-size: 15px">Damage Cost</h6>
                                            <p id="DamageCostPrice" style="font-size: 15px">${car.damageCost}</p>
                                        </div>

                                        <div class="col-sm-3" id="DivStatus">
                                            <h6 id="StatusTopic" style="color: black; font-size: 15px">Status</h6>
                                            <p id="TxtStatus" style="font-size: 15px">${car.availability}</p>
                                        </div>

                                    </div>

                                    <div class="d-flex align-items-center" style="margin-left: 60px">
                                        <div class="col-sm-3">
                                            <button class="btn btn-primary gap-5" id="btnAddMaintenance" style="background-color: #7b2407;color: white; border: none; width: 203px; margin-left: 353px">Add To Maintenance</button>
                                        </div>

                                        <div class="col-sm-3">
                                            <button class="btn btn-primary" id="btnupdateCar" style="background-color: #06065f;color: white; border: none; width: 100px; margin-left: 398px">Update</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>`;

                $("#ViewVehicleDiv").append(div);



            }
        }
    });
}