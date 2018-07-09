import React from 'react'
import { Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import { history } from './index.js'

import App from './App'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Dashboard from './components/Dashboard'
import Register from './components/Register'

const Routes = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Redirect from="/logout" to="/login" />
        <Route path="/dashboard" component={Dashboard} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
)

export default Routes
