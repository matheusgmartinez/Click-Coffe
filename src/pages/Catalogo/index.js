import React from 'react'
import Navbar from '../../components/Navbar'
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import catalogo from '../../assets/catalogo.jpeg'

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
            <p></p>
            <Card />
            <p></p>
            <Footer />
        </div>
    )
}

export default Catalogo;