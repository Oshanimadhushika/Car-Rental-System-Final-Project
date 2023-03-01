var carNames = sendVehicleNameToCart(); /*Benz, BMW, Premio */
console.log(carNames);


function loadCart() {
    $("#tblCartDetail").empty();

    for (let i = 0; i < carNames.length; i++) {
        let cRow = `<tr>
                        <th scope="row">${carNames[i].model}</th>
                        <td><a class="text-primary fw-bold" href="#">${carNames[i].dRate}</a></td>
                        <td>227,000</td>
                        <td class="fw-bold">${carNames[i].mRate}</td>
                        <td>${carNames[i].pickupD}</td>
                        <td>${carNames[i].returnD}</td>

                        <td>
                            <div class="input-group-text">
                                <input aria-label="Checkbox for following text input" class="form-check-input mt-0"
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
                        <td><i data-crtClose="${carNames[i].model}"  class="fa-solid fa-xmark fa-2xl icnCartClose"></i></td>
                    </tr>`;

        $("#tblCartDetail").append(cRow);

    }
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
