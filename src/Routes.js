import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from './Views/home'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/"><Redirect to="/home" /></Route>
            <Route exact path="/home" component={HomePage} />
            <Route><Redirect to="/home"/></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;