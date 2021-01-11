import React from 'react'

const Contact = () => {
    return (
        <div class="bg-light mt-5 customHeight">
            <h2 class="p-5">Kontakt</h2>
            <div class="w-100 d-flex justify-content-around row row-cols-1 row-cols-lg-3 mx-auto">
                <div class="col text-center pb-5 ">
                    <i class="fas fa-phone fa-3x"></i>
                    <p class="pt-5 fw-bolder">511 777 999</p>
                    <p class="pt-3 fw-bolder">744 999 222</p>
                </div>
                <div class="col text-center pb-5">
                    <i class="fas fa-map-marked-alt fa-3x"></i>
                    <p class="pt-5 fw-bolder">ul. Fryderyka Chopina 5</p>
                    <p class="pt-3 fw-bolder">80-808 Gdańsk</p>
                </div>
                <div class="col text-center pb-5">
                    <i class="fas fa-at fa-3x"></i>
                    <p class="pt-5 fw-bolder">info@kands.pl</p>
                    <p class="pt-3 fw-bolder">office@kands.pl</p>
                </div>
            </div>
        </div>
    )
}

export default Contact
