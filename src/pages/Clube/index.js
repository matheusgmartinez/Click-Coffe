import React from 'react'
import Navbar from '../../components/Navbar'
import clube from '../../assets/clube.jpg'
import clube1 from '../../assets/clube1.png'
import clube2 from '../../assets/clube2.jpg'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom';

function Clube() {
    return (
        <div>
            <Navbar />
            <div style={{ "border-bottom": "solid black 1px" }}></div>
            <div class="clube">
                <h2 style={{ "padding": "3%" }}>Conheça o Coffe Pass</h2>
                <img alt="clube" class="clube" src={clube} />
            </div>
            <p></p>
            <div class="row" style={{ "background-color": "#FCF7EA" }}>
                <div class="col-md-4">
                    <img alt="clube1" class="imagens" style={{ "margin-top": "10%", "padding-bottom": "8%" }} src={clube1} />
                    <p></p>
                </div>
                <div class="col-md-6 texto2-clube">
                    <h3>Deixe seus colaboradores mais motivados e engajados no trabalho!</h3>
                    <p>Rede credenciada de coworkings, ofertas diferenciadas,
                        cafes especiais. Tudo em uma só assinatura.</p>
                    <p></p>
                    <div class="col-12">
                        <script async data-uid="8e5ee871d2" src="https://tremendous-speaker-7407.ck.page/8e5ee871d2/index.js"></script>
                    </div>
                </div>
            </div>
            <div class="row margem">
                <h1 class="texto-clube" style={{ "margin-left": "10%" }}>Como funciona para sua empresa</h1>
                <p></p>
                <div class="col-md-6 texto texto-clube" style={{ "margin-left": "10%" }}>
                    <h3>Você contrata o beneficio</h3>
                    <p>A empresa investe um valor mensal fixo baseado no total de colaboradores
                        (estagiários, PJs, menores aprendizes).</p>
                    <p></p>
                    <h3>Disponibiliza para os colaboradores</h3>
                    <p>Ajudamos você a engajar  o time com comunicações personalizadas.</p>
                    <p></p>
                    <h3>E acompanha todos os indicadores</h3>
                    <p>Você  tem acesso a indicadores  sobre  a adesão  e sucesso do benefício.</p>
                    <p></p>
                </div>
                <div class="col-md-4">
                    <img alt="clube2" class="imagens" style={{ "margin-right": "15%" }} src={clube2} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Clube;