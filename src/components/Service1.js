import React from 'react'
import Slider from './Slider'

const Service1 = () => {
    return (
        <div class="bg-light mt-5 customHeight">
            <h2 class="pt-5 px-5">Czyszczenie dachów i okien</h2>
            <p class="px-5">
            W skład naszej oferty wchodzi wysokociśnieniowe mycie dachów i okien. Podczas pracy wykorzystujemy specjalnie przygotowaną do tego typu zadań chemię czyszczącą oraz wysokiej klasy sprzęt.

            Jesteśmy w stanie wykonać czyszczenie na każdej wysokości dzięki wykorzystaniu technik alpinistycznych oraz przy pomocy podnośników.

            Oferujemy między innymi:

            mycie dachów,
            mycie okien o dowolnej powierzchni.
            </p>
            <Slider />
        </div>
    )
}

export default Service1