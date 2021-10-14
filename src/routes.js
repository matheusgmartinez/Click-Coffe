import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Catalogo from './pages/Catalogo'
import Contato from './pages/Contato'
import Clube from './pages/Clube'
import Sobre from './pages/Sobre'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/main" component={Main} />
                <Route path="/catalogo" component={Catalogo} />
                <Route path="/contato" component={Contato} />
                <Route path="/clube" component={Clube} />
                <Route path="/sobre" component={Sobre} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;