import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home/Home'
import CardsNew from './components/Cards/New'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../node_modules/bulma/css/bulma.css'

const root = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/cards/new' component={CardsNew} />
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>,
  root
)
