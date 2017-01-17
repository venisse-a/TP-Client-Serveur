import React from 'react';
import {Route} from 'react-router';
import App from './component/app';
import Home from './component/home';
import Register from './component/register';
import Login from './component/login';
import Profile from './component/profile';
import Vehicles from './component/vehicles'


export default (
    <Route component={App}>
        <Route path="/" component={Home}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/vehicle" component = {Vehicles}/>
    </Route>
);

