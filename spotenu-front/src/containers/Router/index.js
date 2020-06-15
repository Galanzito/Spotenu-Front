import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import SignUpPage from '../SignUpPage/SignUpPage';

export const routes = {
    home: "/",
    signup: "/signup"
    
}

function Router(props) {
    return(
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.home} component={HomePage} />
                <Route exact path={routes.signup} component={SignUpPage} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Router;