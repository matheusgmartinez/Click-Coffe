import React, { Component } from 'react'
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

        const { produtos } = this.state;

        console.log(produtos)

    }

    render() {

        const { produtos } = this.state;

        return (

            <div class="container">
                <div class="filter">
                    <div class="col filter-result" >
                        <button class="btn btn-light">Todos</button>
                    </div>
                    <div class="col filter-space">
                        <button class="btn btn-light">Espresso</button>
                    </div>
                    <div class="col filter-space">
                        <button class="btn btn-light">Especiais</button>
                    </div>
                    <div class="col filter-space">
                        <button class="btn btn-light">Chocolates</button>
                    </div>
                    <div class="col filter-space">
                        <button class="btn btn-light">Alcoolicos</button>
                    </div>
                </div>
                <div class="container">
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
            </div>
        );
    }
}
export default Card;