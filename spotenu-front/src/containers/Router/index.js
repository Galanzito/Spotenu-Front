import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from '../LoginPage/LoginPage';
import SignUpPage from '../SignUpPage/SignUpPage';

export const routes = {
    login: "/",
    signup: "/signup"

}

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.login} component={LoginPage} />
                <Route exact path={routes.signup} component={SignUpPage} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Router;