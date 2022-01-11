/* eslint-disable no-unused-vars */
import React, { lazy, Suspense } from 'react';
import {BrowserRouter, Redirect, Switch } from 'react-router-dom';
import AuthRoutes from "./AuthRoutes";
import PrivateRoutes from "./PrivateRoutes";
import history from "../helpers/history";

const Routes = props => {
    const Login = lazy(() => import('../Pages/Auth/Login'));
    const Signup = lazy(() => import('../Pages/Auth/Signup'));
    const Dashboard = lazy(() => import('../Pages/Dashboard'));
    

  return (
    <>
      <BrowserRouter history={history}>
        <Suspense fallback={<div> loading...</div>} >
          <Switch>
            <AuthRoutes exact path="/" component={Login} />
            <AuthRoutes exact path="/create-user" component={Signup} />
            
            <AuthRoutes exact path="/dashboard" component={Dashboard} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
};


export default Routes;