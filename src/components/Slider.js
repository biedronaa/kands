import React from 'react'
import banner from '../images/baner.jpg'
import banner1 from '../images/baner1.jpg'
import banner2 from '../images/baner2.jpg'

const Slider = () => {
    return (
        <div id="carouselExampleIndicators" class="carousel slide w-75 mx-auto" data-bs-ride="carousel">
        <ol class="carousel-indicators">
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div class="carousel-inner sliderHeight mt-5">
            <div class="carousel-item active">
            <img src={banner} class="d-block w-100" alt="mycie szyb" />
            </div>
            <div class="carousel-item">
            <img src={banner1} class="d-block w-100" alt="mycie elewacji" />
            </div>
            <div class="carousel-item">
            <img src={banner2} class="d-block w-100" alt="mycie auta" />
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </a>
        </div>
    )
}

export default Slider


