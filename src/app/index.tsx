import * as React from 'react';
import { Route, Switch } from 'react-router';
import { hot } from 'react-hot-loader';
import MainApp from './pages/Main'

export const App = hot(module)(() => (
  <Switch>
    <Route path="/" component={MainApp} />
  </Switch>
));
