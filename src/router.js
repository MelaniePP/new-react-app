import React, { Component } from 'react';
import { Router } from 'react-router';
import { withRouter, Redirect,Route,Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

// const Main = withRouter(props => <Layout {...props} />);
const BasicRoute = () => (
    <Route>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
        </Switch>
    </Route>
)

export default BasicRoute