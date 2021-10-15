import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import catalogo from '../../assets/catalogo.jpeg'

function Catalogo() {

    return (
        <div>
            <Navbar />
            <div style={{ "border-bottom": "solid black 1px" }}></div>
            <div class="container-fluid">
                <div class="clube">
                    <h2 style={{ "padding": "3%" }}>Nossas Opções</h2>
                    <img alt="catalogo" class="catalogo" src={catalogo} />
                </div>
                <p></p>
                <div class="card">
                <Card />
                </div>
                <Footer />
            </div>
        </div>

    )
}

export default Catalogo;