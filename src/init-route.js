import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const Login = lazy(() => import('./login/login'));
const ChartHome = lazy(() => import('./d3charts/charthome'));

const Root = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/charthome" component={ChartHome} />
    </Suspense>
  </Router>
);

export default Root;
