import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Main, Login, OrderFormHook, ViewOrdersHook } from '../components';
import ProtectedRoute from "../router/route-guarding/ProtectedRoute"

const AppRouter = (props) => {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <ProtectedRoute path="/order" exact component={OrderFormHook} />
      <ProtectedRoute path="/view-orders" exact component={ViewOrdersHook} />
    </Router>
  );
}

export default AppRouter;
