import React, { Component } from 'react'
import api from '../services/Api';

import './styles.css'

class Card extends Component {

    state = {
        produtos: [],
    }

    async componentDidMount(){
        const response = await api.get('/catalogo/produtos');
        this.setState({produtos: response.data.data})
    }

    render(){

        const {produtos} = this.state;

        return(
            <div>
                <h1>Listar Produtos</h1>
                <ul>
                   {produtos.map(produto => (
                       <li>
                           <h3>Nome: {produto.nome}</h3>
                       </li>
                   ))}
                </ul>
            </div>
        );
    }
}

export default Card;