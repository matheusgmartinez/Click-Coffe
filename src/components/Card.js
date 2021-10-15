import React, { Component, useState } from 'react'
import { Grid } from '@material-ui/core';
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
            <div class="container">

                <div class="filter">
                    <div class="col filter-result">
                        <h5>Todos</h5>
                    </div>
                    <div class="col filter-space">
                        <h5>Espresso</h5>
                    </div>
                    <div class="col filter-space">
                        <h5>Especiais</h5>
                    </div>
                    <div class="col filter-space">
                        <h5>Chocolates</h5>
                    </div>
                    <div class="col filter-space">
                        <h5>Alcoolicos</h5>
                    </div>
                </div>

                <Grid container justify="start" spacing={4}>
                    {produtos.map(produto => (
                        <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3}>
                            <div class="produtos">
                                <h3>{produto.nome}</h3>
                                <img src={produto.imagem} />
                                <p>{produto.desc}</p>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }
}
export default Card;