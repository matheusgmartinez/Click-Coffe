import React, { Component } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

import './styles.css'

class Footer extends Component {

    render() {
        return (
            <div>
                <div style={{ "background-color": "#F6F9FC", "padding": "2%" }}>
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-4">
                            <img alt="logo" class="logo2" src={logo} />
                            <p></p>
                        </div>
                        <div class="col">
                            <h4>A Click Coffee</h4>
                            <p></p>
                            <a href="#!"><Link to={'/sobre'}>Sobre nós</Link></a>
                            <p></p>
                            <a href="#!"><Link to={'/catalogo'}>Nossas opções</Link></a>
                            <p></p>
                            <a href="#!"><Link to={'/clube'}>Clube</Link></a>
                            <p></p>
                        </div>
                        <div class="col">
                            <h4>Redes Sociais</h4>
                            <p></p>
                            <a href="https://www.instagram.com/clickcoffeebeneficios/">Instagram</a>
                            <p></p>
                            <a href="https://www.facebook.com/click.coffee.9">Facebook</a>
                            <p></p>
                            <a href="#!">Outra rede</a>
                            <p></p>
                        </div>
                        <div class="col">
                            <h4>Contato</h4>
                            <p></p>
                            <p>sac@cafe.com</p>
                            <p>(99) 99999-9999</p>
                            <p></p>
                            <a href="#!">Chama no WhatsApp</a>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div style={{ "background-color": "#F6F9FC", "text-align": "center", "font-size": "12px", "border-top": "solid black 1px" }}>
                    <p></p>
                    © Copyright 2021 - Click Coffee - Todos os direitos reservados Click Coffee S.A.
                    <br />
                    CNPJ 00.000.000/0001-00 / Avenida dos Autonomistas, nº 1496, Vila Yara, Osasco/SP - CEP 06.020-902
                </div>
            </div>
        )
    }
}

export default Footer;