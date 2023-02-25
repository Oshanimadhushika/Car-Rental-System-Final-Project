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
    let Brand = $("#txtBrand").val();
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
    let availability =" ";
    let image1 = frontFileName;
    let image2 = backFileName;
    let image3 = sideFileName;
    let image4 = interiorFileName;
    let damageCost=$("#txtDamageCost").val();

    var CarDTO = {
        registrationId: registrationId,
        Brand: Brand,
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