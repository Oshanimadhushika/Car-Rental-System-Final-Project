var carNames = sendVehicleNameToCart(); /*Benz, BMW, Premio */
console.log(carNames);

var rentalAr = [];
var dayCount = 0;
var driverPayment = 0;


var curDay = function (sp) {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (mm + sp + dd + sp + yyyy);
};

function loadCart() {
    $("#tblCartDetail").empty();

    for (let i = 0; i < carNames.length; i++) {
        let cRow = `<tr>
                        <th scope="row">${carNames[i].model}</th>
                        <td><a class="text-primary fw-bold" href="#">${carNames[i].dRate}</a></td>
                        <td>${carNames[i].mRate}</td>
                        <td class="fw-bold">${carNames[i].dWaiver}</td>
                        <td>${carNames[i].pickupD}</td>
                        <td>${carNames[i].returnD}</td>

                        <td>
                            <div class="input-group-text">
                                <input data-cartDriverCheckBoxRegId="${carNames[i].regId}" aria-label="Checkbox for following text input" class="form-check-input mt-0"
                                       type="checkbox"
                                       value="">&nbsp;Need
                            </div>
                        </td>

                        <td>
                            <div class="w-100">
                                <input class="form-control" id="register-form-NIC-image1" style="border: 1px solid gray"
                                       type="file">
                            </div>
                        </td>
                        <td><i data-crtClose="${carNames[i].model}"  class="bi bi-x-circle icnCartClose"></i></td>
                    </tr>`;

        $("#tblCartDetail").append(cRow);

    }

    addRentalTOTheRentAr();

    checkDriver();
    getDateRange();
    getAmount();
    deleteCartItem();
}

function deleteCartItem() {
    $(".icnCartClose").click(function () {

        console.log("CArt Eke Close eken enne"+"---"+$(this).attr("data-crtClose"));

        let boolCart=false;

        for(let i=0;i<vNameAr.length;i++){
            console.log(vNameAr[i].model+"==="+$(this).attr("data-crtClose"));
            if(vNameAr[i].model===$(this).attr("data-crtClose")){
                //console.log(vNameAr[i]+"==="+$(param).attr("data-btnRentIt"));
                boolCart=true;
            }
        }

        if(boolCart){
            for (var i = 0; i < vNameAr.length; i++) {
                if (vNameAr[i].model === $(this).attr("data-crtClose")) {
                    vNameAr.splice(i, 1);
                    break;
                }
            }
        }
        loadCart();
    })
}
