import React from 'react';

import Loadable from 'react-loadable';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Provider from './store/provider'
import rootReducer from './reducer/rootReducer'

import PrivateRoute from './route/privateRoute'
import AdminRoute from './route/adminRoute'

import Home from './pages/home'


const Quiz = Loadable({
  loader: () => import('./pages/quiz'),
  loading: () => <h3>Loading...</h3>
});

const AdminAction = Loadable({
  loader: () => import('./pages/adminAction'),
  loading: () => <h3>Loading...</h3>
})

const Login = Loadable({
  loader: () => import('./pages/login'),
  loading: () => <h3>Loading...</h3>
})

function App() {
  return (
    <Provider rootReducer={rootReducer}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <PrivateRoute path="/quiz" exact component={Quiz} />
            <AdminRoute path="/admin-action" exact component={AdminAction} />
            <Route path="/login" exact component={Login} />
            <Route component={() => <h1>Not Found</h1>} />
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
