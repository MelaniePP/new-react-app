import React, { Component } from 'react';
import { Router } from 'react-router';
import { Redirect,Route,Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';


const BasicRoute = () => (
    <Main>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/login" component={Login}></Route>
        </Switch>
    </Main>
)

export default BasicRoute