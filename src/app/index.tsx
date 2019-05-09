import * as React from 'react';
import { Route, Switch } from 'react-router';
import {} from 'react-router-dom'
import { hot } from 'react-hot-loader';
import MainApp from './pages/Main'

export const App = hot(module)(() => (
  <Router>
                <div>
                    <Route path="/" component={HeaderBar} />
                    <Route exact path="/" component={MainScreen} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/resetPassword" component={ResetPassword} />
                    <Route path="/post" component={PostScreen} />
                    <Route exact path="/newpost" component={NewPostScreen} />
                </div>
            </Router>
));
