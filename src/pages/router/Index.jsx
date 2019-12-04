import React, { Component } from 'react';
import {
    Route,
    Redirect,
    Switch,
    NavLink
} from 'react-router-dom'
import Move from './move'
import Tv from './tv'
import Page404 from './404.jsx'
import './active.css'
class Index extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink activeClassName='active' to='/move'>电影</NavLink>
                    </li>
                    <li>
                        <NavLink to='/tv'>电视</NavLink>
                    </li>
                </ul>
                <Switch>
                    <Route
                        path='/move'
                        component={Move}
                    />
                    <Route
                        path='/tv'
                        component={Tv}
                    />
                    <Redirect
                        exact
                        from='/'
                        to='/move'
                    />
                    <Route
                        path='*'
                        component={Page404}
                    />
                </Switch>
            </div>
        );
    }
}

export default Index;