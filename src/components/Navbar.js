import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark px-4">
                <div class="container-fluid">
                    <Link class="navbar-brand text-warning" to="/">K&S</Link>
                    <button class="navbar-toggler btn btn-outline-warning" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-2 mb-2 mb-lg-0">

                            <li class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Usługi
                                </a>
                                <ul class="dropdown-menu bg-dark border-0 " aria-labelledby="navbarDropdown">
                                    <li><Link class="nav-link text-white" to="1">Czyszczenie dachów i okien</Link></li>
                                    <li><Link class="nav-link text-white" to="2">Czyszczenie elewacji i podjazdów</Link></li>
                                    <li><Link class="nav-link text-white" to="3">Czyszczenie samochodów</Link></li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link text-white" aria-current="page" to="/cennik">Cennik</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-white" to="/kontakt">Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav