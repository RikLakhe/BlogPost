import React, {Fragment} from "react";
import { withRouter, Switch, Route} from 'react-router-dom'

import PublicRoute from '../../routes/AppRoute'

import {
    AsyncAppLayout,
    AsyncHome,
    AsyncBlog,
    AsyncAuth,
    AsyncException
} from './AsyncComponent'

const App = () => (
    <Fragment>
        <Switch>
            <PublicRoute exact path="/" layout={AsyncAppLayout} component={AsyncHome} />
            <PublicRoute path="/blog" layout={AsyncAppLayout} component={AsyncBlog} />
            <PublicRoute path="/sign-in" layout={AsyncAppLayout} component={AsyncAuth} />
            <PublicRoute layout={AsyncAppLayout} component={AsyncException} />
        </Switch>
    </Fragment>
);

export default withRouter(App);