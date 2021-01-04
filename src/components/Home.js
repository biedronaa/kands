import React from 'react'
import banner from '../images/baner.jpg'
import banner1 from '../images/baner1.jpg'
import banner2 from '../images/baner2.jpg'

const Home = () => {
    return (
        <div class="card-group p-4 bg-light">

            <div class="card p-4 mx-2 border-0 bg-light">
                <img src={banner} class="card-img-top" alt="mycie szyb" />
                <div class="card-body">
                    <h5 class="card-title">Czyszczenie dachów i okien</h5>
                    <p class="card-text">W skład naszej oferty wchodzi wysokociśnieniowe mycie dachów. Podczas pracy wykorzystujemy specjalnie przygotowaną do tego typu zadań chemię czyszczącą oraz wysokiej klasy sprzęt.</p>
                </div>
            </div>

            <div class="card p-4 mx-2 border-0 bg-light">
                <img src={banner1} class="card-img-top" alt="mycie elewacji" />
                <div class="card-body">
                    <h5 class="card-title">Czyszczenie elewacji i podjazdów</h5>
                    <p class="card-text">Efektywnie czyścimy nie tylko kostkę brukową, ale także wszelkiego rodzaju kamienie naturalne, piaskowce. Myjemy także tarasy, usuwamy plamy oleju i ropopochodnych oraz usuwamy zanieczyszczenia atmosferyczne.</p>
                </div>
            </div>

            <div class="card p-4 mx-2 border-0 bg-light">
                <img src={banner2} class="card-img-top" alt="mycie auta" />
                <div class="card-body">
                    <h5 class="card-title">Czyszczenie samochodów</h5>
                    <p class="card-text">Oprócz standardowego mycia wysokociśnieniowego samochodów oferujemy również mycie przyczep, maszyn przemysłowych oraz rolniczych a nawet mebli ogrodowych.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Home