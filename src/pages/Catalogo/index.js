import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import catalogo from '../../assets/catalogo.jpeg'
import Filter from '../../components/Filter'

function Catalogo() {

    return (
        <div>
            <Navbar />
            <div style={{ "border-bottom": "solid black 1px" }}></div>
            <div class="catalogo">
                <h2 style={{ "padding": "3%" }}>Nossas Opções</h2>
                <img alt="catalogo" class="catalogo" src={catalogo} />
            </div>
            <p></p>
            <Filter />
            <p></p>
            <Card />
            <div class="container-fluid">
                <Footer />
            </div>
        </div>
    )
}

export default Catalogo;