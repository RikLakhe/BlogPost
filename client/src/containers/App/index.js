import React, {Fragment} from "react";
import { withRouter, Switch, Route} from 'react-router-dom'

import {PublicRoute,PrivateRoute} from '../../routes/AppRoute'

import {
    AsyncAppLayout,
    AsyncHome,
    AsyncBlog,
    AsyncProfile,
    AsyncException
} from './AsyncComponent'

const App = () => (
    <Fragment>
        <Switch>
            <PublicRoute exact path="/" layout={AsyncAppLayout} component={AsyncHome} />
            <PublicRoute path="/blog" layout={AsyncAppLayout} component={AsyncBlog} />
            <PrivateRoute path="/profile" layout={AsyncAppLayout} component={AsyncProfile} />
            <PublicRoute layout={AsyncAppLayout} component={AsyncException} />
        </Switch>
    </Fragment>
);

export default withRouter(App);