import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from '../LoginPage/index';
import SignUpPage from '../SignUpPage/index';
import HomePage from '../HomePage';

export const routes = {
    login: "/",
    signup: "/signup",
    home: "/home"

}

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.login} component={LoginPage} />
                <Route exact path={routes.signup} component={SignUpPage} />
                <Route exact path={routes.home} component={HomePage} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Router;