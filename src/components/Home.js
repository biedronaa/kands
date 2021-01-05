import React from 'react'
import banner from '../images/baner.jpg'
import banner1 from '../images/baner1.jpg'
import banner2 from '../images/baner2.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div class="bg-light">
            <div class="w-100 d-flex justify-content-around row row-cols-1 row-cols-lg-3 mt-5 mx-auto">
                <div class="col p-4">
                    <div class="card mt-3 border-0 bg-light">
                    <Link to="/1"><img src={banner} class="card-img-top" alt="mycie szyb" /></Link>
                    <div class="card-body">
                        <h5 class="card-title">Czyszczenie dachów i okien</h5>
                        <p class="card-text">W skład naszej oferty wchodzi wysokociśnieniowe mycie dachów. Podczas pracy wykorzystujemy specjalnie przygotowaną do tego typu zadań chemię czyszczącą oraz wysokiej klasy sprzęt.</p>
                    </div>
                    <div class="card-footer bg-light">
                        <Link to="/1" class="btn btn-outline-warning text-dark px-4">Czytaj więcej...</Link>
                    </div>
                    </div>
                </div>

                <div class="col p-4">
                    <div class="card mt-3 border-0  bg-light">
                    <Link to="/2"><img src={banner1} class="card-img-top" alt="mycie elewacji" /></Link>
                    <div class="card-body">
                                        <h5 class="card-title">Czyszczenie elewacji i podjazdów</h5>
                                        <p class="card-text">Efektywnie czyścimy nie tylko kostkę brukową, ale także wszelkiego rodzaju kamienie naturalne, piaskowce. Myjemy także tarasy, usuwamy plamy oleju.</p>
                                    </div>
                                    <div class="card-footer bg-light">
                                        <Link to="/2" class="btn btn-outline-warning text-dark px-4">Czytaj więcej...</Link>
                                    </div>
                    </div>
                </div>

                <div class="col p-4">
                    <div class="card mt-3 border-0  bg-light">
                    <Link to="/3"><img src={banner2} class="card-img-top" alt="mycie auta" /></Link>
                    <div class="card-body">
                                        <h5 class="card-title">Czyszczenie samochodów</h5>
                                        <p class="card-text">Oprócz standardowego mycia wysokociśnieniowego samochodów oferujemy również mycie przyczep, maszyn przemysłowych oraz rolniczych, a nawet mebli ogrodowych.</p>
                                    </div>
                                    <div class="card-footer bg-light">
                                        <Link to="/3" class="btn btn-outline-warning text-dark px-4">Czytaj więcej...</Link>
                                    </div>
                    </div>
                </div>
            </div>

            <div class="text-center py-5 bg-dark text-white">
                <i class="fas fa-calculator fa-3x pb-3"></i>
                <p class="p-2">Chcesz wiedzieć ile może kosztować czyszczenie? Skorzystaj z naszego kalkulatora!</p>
                <Link type="button" class="btn btn-warning text-dark px-4 " to="/cennik">Wyceń zlecenie</Link>
            </div>

        </div>
    )
}

export default Home