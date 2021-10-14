import React, { Component } from 'react'

import './styles.css'

class Card extends Component {

    render() {
        return (
            <div>
                <div class="card">
                    <div class="card-content white-text">
                        <span class="card-title">Barista para seu evento</span>
                        <p style={{"color": "white"}}>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div class="card-action">
                        <a href="#" style={{"color": "white"}}>Ver mais</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;