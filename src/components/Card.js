import React, { Component } from 'react'
import api from '../services/Api';

import './styles.css'

class Card extends Component {

    state = {
        produtos: [],
    }

    async componentDidMount() {
        const response = await api.get('/catalogo/produtos');
        this.setState({ produtos: response.data.data })
    }

    render() {

        const { produtos } = this.state;

        return (
            <div>
                <ul>
                    {produtos.map(produto => (
                        <div class="container">
                            <div class="row margem">
                                <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
                                    <div class="card produtos">
                                        <h3>Nome: {produto.nome}</h3>
                                        <p>Descrição: {produto.desc}</p>
                                        <img src={produto.imagem} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Card;