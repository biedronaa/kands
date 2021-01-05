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
                    <div class="card-footer bg-light mx-auto">
                        <Link to="/1" class="btn btn-outline-warning text-dark px-4 ">Czytaj więcej...</Link>
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
                    <div class="card-footer bg-light mx-auto">
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
                    <div class="card-footer bg-light mx-auto">
                        <Link to="/3" class="btn btn-outline-warning text-dark px-4">Czytaj więcej...</Link>
                    </div>
                    </div>
                </div>
            </div>

            <div class="text-center py-4 bg-dark text-white">
                <h4>Dlaczego my?</h4>
                <p class="p-2 w-75 mx-auto">Nasze umiejętności pozwalają na zredukowanie kosztów danego przedsięwzięcia, niekiedy nawet kilkukrotnie. Posiadamy kilka wyjątkowych cech, które wyróżniają nas na rynku prac wysokościowych i świadczą o naszej marce.</p>
                <div class="w-75 d-flex justify-content-around row row-cols-1 row-cols-md-2 g-4 py-4 mx-auto">
                    <div class="col">
                        <div class="card bg-dark border-0 p-2">
                        <i class="fas fa-lightbulb fa-3x"></i>
                        <div class="card-body">
                            <h5 class="card-title text-warning">Wiedza</h5>
                            <p class="card-text">Nasze umiejętności pozwalają na zredukowanie kosztów danego przedsięwzięcia, niekiedy nawet kilkukrotnie w porównaniu z klasycznymi metodami.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-dark border-0 p-2">
                        <i class="fas fa-thumbs-up fa-3x"></i>
                        <div class="card-body">
                            <h5 class="card-title text-warning">Elastyczność</h5>
                            <p class="card-text">W niektórych trudnodostępnych miejscach może się okazać, iż tylko za pomocą naszej grupy można wykonać wszytkie niezbędne prace.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-dark border-0 p-2">
                        <i class="fas fa-bolt fa-3x"></i>
                        <div class="card-body">
                            <h5 class="card-title text-warning">Szybkość</h5>
                            <p class="card-text">Przygotowywanie miejsca pracy odbywa się bardzo szybko, nie wymaga dużego nakładu sił i środków; prace mogą być prowadzone także etapowo.</p>
                        </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card bg-dark border-0 p-2">
                        <i class="fas fa-sync-alt fa-3x"></i>
                        <div class="card-body">
                            <h5 class="card-title text-warning">Metodyka</h5>
                            <p class="card-text">Nasze metody pracy są mniej uciążliwe dla terenów wokół obiektu, stąd też możemy pracować w miejscach niedostępnych dla ciężkiego sprzętu.</p>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>

            <div class="text-center pt-4 bg-light text-dark">
                <i class="fas fa-calculator fa-3x pb-3"></i>
                <p class="p-2">Chcesz wiedzieć ile może kosztować czyszczenie? Skorzystaj z naszego kalkulatora!</p>
                <Link type="button" class="btn btn-warning text-dark px-4 " to="/cennik">Wyceń zlecenie</Link>
            </div>
        </div>
    )
}

export default Home