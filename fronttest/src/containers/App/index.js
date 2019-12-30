import React, {Fragment} from "react";
import { withRouter, Switch, Route} from 'react-router-dom'

import {PublicRoute} from '../../routes/AppRoute'

import {
    AsyncAppLayout,
    AsyncBlog
} from './AsyncComponent'

const App = props => (
    <Fragment>
        <Switch>
            <PublicRoute exact path="/" layout={AsyncAppLayout} component={AsyncBlog} />
            <PublicRoute exact path="/new" layout={AsyncAppLayout} component={AsyncBlog} />
            <PublicRoute exact path="/search" layout={AsyncAppLayout} component={AsyncBlog} />
        </Switch>
    </Fragment>
);

export default App;