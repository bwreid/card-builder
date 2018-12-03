import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/Home/Home'
import CardsWrapper from './components/Cards/New/Wrapper'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import '../node_modules/bulma/css/bulma.css'

const root = document.getElementById('root')
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/cards/new' component={CardsWrapper} />
      <Route path='/' component={Home} />
    </Switch>
  </BrowserRouter>,
  root
)
