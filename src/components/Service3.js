import React from 'react'
import Slider from './Slider'

const Service3 = () => {
    return (
        <div class="bg-light mt-5 customHeight">
            <h2 class="pt-5 w-75 d-flex justify-content-start mx-auto row row-cols-1 row-cols-lg-3">Czyszczenie samochodów</h2>
            <p class="pt-3 w-75 d-flex justify-content-around row row-cols-1 row-cols-lg-3 mx-auto my-xl-auto text-justify">
            Oprócz standardowego mycia wysokociśnieniowego samochodów oferujemy również mycie przyczep, maszyn przemysłowych oraz rolniczych a nawet mebli ogrodowych.

            Całe czyszczenie wykonujemy z dbałością o szczegóły. Naszym priorytetem jest pełne zadowolenie klienta. Dzięki specjalistycznemu wyposażeniu jesteśmy w stanie zaoferować usługi najwyższej jakości.
            </p>
            <Slider />
        </div>
    )
}

export default Service3