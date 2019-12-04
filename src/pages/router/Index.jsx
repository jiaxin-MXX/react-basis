import React, { Component } from 'react';
import {
    Route,
    Redirect,
    Switch,
    NavLink
} from 'react-router-dom'
import Move from './move'
import Tv from './tv'
import './active.css'
class Index extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NavLink activeClassName='active' to='move'>电影</NavLink>
                    </li>
                    <li>
                        <NavLink to='tv'>电视</NavLink>
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
                        from='/'
                        to='/move'
                    />
                </Switch>
            </div>
        );
    }
}

export default Index;