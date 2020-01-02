import React , { Fragment }from "react";
import {Switch, Route, withRouter} from 'react-router-dom'

import SignInContainer from "./SignInContainer";
import SignUpContainer from "./SignUpContainer";

import Error from "../Exception/Error"

const Auth = ({match}) =>(
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} component={SignInContainer} />
            <Route path={`${match.url}/new`} component={SignUpContainer} />
            <Route component={Error} />
        </Switch>
    </Fragment>
)

export default withRouter(Auth);