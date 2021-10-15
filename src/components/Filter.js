import React, { Component } from 'react'

class Filter extends Component {

    render() {
        return (
            <div class="container">
                <div class="filter">
                    <div class="col filter-result">
                        <h1 style={{"padding-top": "3%"}}>Products</h1>
                    </div>
                    <div class="col filter-sort">
                        <h4>Order</h4>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col filter-size">
                        <h4>Order</h4>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col filter-size">
                        <h4>Order</h4>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class="col filter-size">
                        <h4>Order</h4>
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;