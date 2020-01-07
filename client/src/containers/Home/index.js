import React, {Fragment} from "react";
import {Switch, Route, withRouter} from 'react-router-dom'

import HomeContainer from "./HomeContainer";

import Error from "../Exception/Error"

const Home = ({match}) => (
    <Fragment>
        <Switch>
            <Route
                exact path={`${match.url}`} component={HomeContainer}/>
            <Route component={Error}/>
        </Switch>
    </Fragment>
)

export default withRouter(Home);