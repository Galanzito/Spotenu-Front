import React from 'react';
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from '../LoginPage/index';
import SignUpPage from '../SignUpPage/index';
import AdminPage from '../AdminPage';
import HomePage from '../HomePage';
import PlaylistPage from '../HomePage/PlaylistPage';
import AlbumPage from '../HomePage/AlbumPage';

export const routes = {
    login: "/",
    signup: "/signup",
    admin: "/admin",
    home: "/home",
    playlist: "/playlist",
    album: "/album"
}

function Router(props) {
    return (
        <ConnectedRouter history={props.history}>
            <Switch>
                <Route exact path={routes.login} component={LoginPage} />
                <Route exact path={routes.signup} component={SignUpPage} />
                <Route exact path={routes.admin} component={AdminPage} />
                <Route exact path={routes.home} component={HomePage} />
                <Route exact path={routes.playlist} component={PlaylistPage} />
                <Route exact path={routes.album} component={AlbumPage} />
            </Switch>
        </ConnectedRouter>
    )
}

export default Router;