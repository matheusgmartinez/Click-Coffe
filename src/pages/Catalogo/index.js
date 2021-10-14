import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom';
import Api from '../../components/Api';

function Catalogo() {
    return (
        <div>
            <Navbar />
            <div style={{ "border-bottom": "solid black 1px" }}></div>
            <div class="container-fluid">
                <Api />
            </div>
        </div>
    )
}

export default Catalogo;