import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../src/pages/Login';
import Dashboard from '../src/pages/Dashboard';
import Products from '../src/pages/Products';
import Contacts from '../src/pages/Contacts';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/products" component={Products} />
                <Route path="/contacts" component={Contacts} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
