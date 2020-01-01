import React , { Fragment }from "react";
import {Switch, Route, withRouter} from 'react-router-dom'

import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

import Error from "../Exception/Error"

const Auth = ({match}) =>(
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} component={SignInForm} />
            <Route path={`${match.url}/new`} component={SignUpForm} />
            <Route component={Error} />
        </Switch>
    </Fragment>
)

export default withRouter(Auth);