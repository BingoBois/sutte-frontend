import * as React from 'react';
import { Route } from 'react-router';
import { Router } from 'react-router-dom'
import { hot } from 'react-hot-loader';
import MainApp from './pages/App'
import { createBrowserHistory } from 'history';
import Header from '../components/Header'
import Login from './pages/Login';

// prepare store
const history = createBrowserHistory();

export const App = hot(module)(() => (
            <Router history={history}>
                    <Route path="/" component={Header} />
                    <Route exact path="/" component={MainApp} />
                    <Route exact path="/login" component={Login} />
            </Router>
));
