import React from 'react'
import Navbar from '../../components/Navbar'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import contato from '../../assets/contato.jpg'
import GoogleMaps from '../../components/GoogleMaps'

function Contato() {
    return (
        <div>
            <Navbar />
            <div style={{ "border-bottom": "solid black 1px" }}></div>
            <div class="contato">
                <h2 style={{ "padding": "3%" }}>Contato</h2>
                <img alt="sobre" src={contato} />
            </div>

            <div class="container">
                <div class="mb-3" style={{ "margin-left": "10%", "margin-right": "10%" }}>
                    <label for="exampleFormControlInput1" class="form-label">Nome</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Seu nome" />
                </div>
                <div class="mb-3" style={{ "margin-left": "10%", "margin-right": "10%" }}>
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="seu@mail.com" />
                </div>
                <div class="mb-3" style={{ "margin-left": "10%", "margin-right": "10%" }}>
                    <label for="exampleFormControlTextarea1" class="form-label">Mensagem</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto">
                    <a class="enviar btn btn-dark btn-lg" href="#">Enviar</a>
                </div>
                <p></p>
                <h4 style={{ "text-align": "center" }}>ou</h4>
                <p></p>
                <div style={{ "text-align": "center" }}>
                    <a class="veja-mais btn btn-primary btn-lg" href="https://api.whatsapp.com/send?phone=
                    5511948490531&text=Ol%C3%A1%2C%20quero%20saber%20como%20revolucionar%20a%20pausa%20para%20o%20caf%C3%A9%20da%20minha%20empresa!" 
                    target="_blank">Chama no WhatsApp</a>
                </div>
                <p></p>
            </div>

            <Footer />
        </div>
    )
}

export default Contato;