var baseUrl="http://localhost:8080/back_end_war_exploded/";
$("#btnAddVehicle").click(function () {
    let registrationId1 = $("#txtRegiNumberCar").val();

    saveCar()
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
                                    <button class="btn_RentIt">RENT IT</button>
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
                                    <div class="d-flex align-items-center" style="margin-top: 5px; width:550px">
                                        <div class="col-sm-3" id="ImageVehicle">
                                            <img style="width: 152px;" src=${"http://localhost:8080/back_end_war_exploded/"+car.image3} alt="">
                                        </div>
                                        
                                         <div class="col-sm-3" id="DivModel" >
                                            <h6 id="VehicleId" style="color: black; font-size: 15px; ">Vehicle ID</h6>
                                            <p id="VehicleId" style="font-size: 15px">${car.registrationId}</p>
                                        </div>

                                        <div class="col-sm-3" id="DivModel" >
                                            <h6 id="ModelTopic" style="color: black; font-size: 15px; ">Model</h6>
                                            <p id="ModelName" style="font-size: 15px">${car.model}</p>
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
                                            <button class="btn btn-primary" data-bs-toggle="modal" 
                                            data-bs-target="#addItemModal" id="btnupdateCar" style="background-color: #06065f;color: white; border: none; width: 100px; margin-left: 398px">Update</button>
                                        </div>
                                        
                                      <!--pop up update-->  
                                        
                                        
                                        <div class="modal fade" id="addItemModal" tabindex="-1" aria-labelledby="addItemModalLabel" aria-hidden="true">
                    <div class="modal-dialog-centered modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header text-light" style="background-color:#1F1D2E ">
                                <h5 class="modal-title " id="addItemModalLabel">Update & Delete Car</h5>
                                <button type="button" class="btn-close" style="background-color: white;" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div>
                                        <label for="vhId" class="col-form-label">Vehicle Id : </label>
                                        <input  type="text" class="form-control txtVehicleId-update" id="vhId" disabled>
                                    </div>
                                    <div >
                                        <label for="vhBrand" class="col-form-label">Vehicle Brand : </label>
                                        <input  type="text" class="form-control txtVehicleBrand-update" id="vhName">
                                    </div>
                                    <div >
                                        <label for="vhModel" class="col-form-label">Vehicle Model : </label>
                                        <input  type="text" class="form-control txtVehicleModel-update" id="vhModel">
                                    </div>
                                    <div >
                                        <label for="vhDaily" class="col-form-label">Daily Rate:</label>
                                        <input  type="text" class="form-control txtVehicleDaily-update" id="vhDaily">
                                    </div>
                                    <div >
                                        <label for="vhMonthly" class="col-form-label">Monthly Rate:</label>
                                        <input  type="text" class="form-control txtVehicleMonthly-update" id="vhMonthly">
                                    </div>
                                    <div >
                                        <label for="vhDamage" class="col-form-label">Damage Cost:</label>
                                        <input  type="text" class="form-control txtVehicleDamage-update" id="vhDamage">
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btnUpdateCar btn btn-primary data-bs-dismiss="modal">Update</button>
                                <button id="btnDeleteCar" type="button" class="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
         </div>
    </div>
 </div><!-- End Sales Card -->
                                    </div>
                                </div>

                            </div>
                        </div>
            `;

                $("#ViewVehicleDiv").append(div);


                function viewUpdateCar() {
                    var newDetails = {
                        registrationId: $('.txtVehicleId-update').val(car.registrationId),
                        brand: $('.txtVehicleBrand-update').val(car.brand),
                        model: $('.txtVehicleModel-update').val(car.model),
                        dailyRate: $('.txtVehicleDaily-update').val(car.dailyRate),
                        monthlyRate: $('.txtVehicleMonthly-update').val(car.monthlyRate),
                        damageCost: $('.txtVehicleDamage-update').val(car.damageCost)

                    }

                    $.ajax({
                        url: baseUrl + "car",
                        method: "put",
                        contentType: "application/json",
                        data: JSON.stringify(newDetails),
                        success: function (res) {
                            if (res.status === 200) {
                                alert(res.message)
                            } else {

                            }
                        }
                    });
                }

                $('.btnViewUpdate').click(function () {
                    viewUpdateCar();
                });


            }
        }
    });
}