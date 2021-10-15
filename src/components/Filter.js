import React, { Component } from 'react'

class Filter extends Component {

    render() {
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
        )
    }
}

export default Filter;