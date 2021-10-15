import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

import './styles.css'

class Navbar extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light align-navbar" style={{ "background-color": "white", "margin-right": "7%", "margin-left": "7%"}}>
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" 
                        aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <Link to={'/main'} class="logo"><img alt="logo" class="logo3"  href="#" src={logo} /></Link>
                        <div class="collapse navbar-collapse j justify-content-end" id="navbarTogglerDemo01">
                            <ul class="navbar-nav mr-auto mb-2 mb-lg-0" style={{ "font-size": "2rem"}}>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#"><Link to={'/clube'}>Clube</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#" ><Link to={'/catalogo'}>Catálogo</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#"><Link to={'/sobre'}>Sobre</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#"><Link to={'/contato'}>Contato</Link></a>
                                </li>
                            </ul>
                            <form class="d-flex" >
                                <input class="form-control me-2" type="search" placeholder="" aria-label="Search" />
                                <button class="btn btn-dark" type="submit"><i class="fas fa-search"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar;