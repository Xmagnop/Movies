import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from './Views/home/home';
import MovieDetails from './Views/movieDetails/movieDetails';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/home/:id" component={MovieDetails} />
            <Route><Redirect to="/home"/></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;