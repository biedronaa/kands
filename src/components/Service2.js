import React from 'react'
import Slider from './Slider'
const Service2 = () => {
    return (
        <div class="bg-light mt-5 customHeight">
            <h2 class="pt-5 w-75 d-flex justify-content-start mx-auto row row-cols-1 row-cols-lg-3">Czyszczenie elewacji i podjazdów</h2>
            <p class="pt-3 w-75 d-flex justify-content-around row row-cols-1 row-cols-lg-3 mx-auto my-xl-auto text-justify">
            Efektywnie czyścimy nie tylko kostkę brukową, ale także wszelkiego rodzaju kamienie naturalne, piaskowce. Myjemy także tarasy, usuwamy plamy oleju i ropopochodnych oraz usuwamy zanieczyszczenia atmosferyczne.

            Dzięki specjalistycznemu wyposażeniu jesteśmy w stanie zaoferować również usuwanie mchów i porostów porastających kostkę i kamienie.
            </p>
            <Slider />
        </div>
    )
}

export default Service2