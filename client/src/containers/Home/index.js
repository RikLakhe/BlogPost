import React , { Fragment }from "react";
import {Switch, Route, withRouter} from 'react-router-dom'

import HomeContainer from "../Home/HomeBlog";

import Error from "../Exception/Error"

const Home = ({match}) =>(
    <Fragment>
        <Switch>
            <Route
                exact path={`${match.url}`} component={HomeContainer} />
        </Switch>
    </Fragment>
)

export default withRouter(Home);