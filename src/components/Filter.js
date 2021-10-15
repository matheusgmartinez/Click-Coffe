import React from 'react'
import Produtos from './Produtos'
import api from '../services/Api';

import './styles.css'

function Filter() {

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
        </div>
    );
}

export default Filter;