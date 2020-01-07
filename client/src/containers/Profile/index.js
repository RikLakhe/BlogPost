import React , { Fragment }from "react";
import {Switch, Route, withRouter} from 'react-router-dom'

import ProfileContainer from "./ProfileContainer.js";

import Error from "../Exception/Error"

const Home = ({match}) =>(
    <Fragment>
        <Switch>
            <Route
                exact path={`${match.url}`} component={ProfileContainer} />
            <Route component={Error} />
        </Switch>
    </Fragment>
)

export default withRouter(Home);