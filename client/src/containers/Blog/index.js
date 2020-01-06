import React , { Fragment }from "react";
import {Switch, Route, withRouter} from 'react-router-dom'

import HomeContainer from "../Home/HomeContainer";
import AddContainer from "./AddBlogContainer";
import FindBlogContainer from "./FindBlogContainer";

import Error from "../Exception/Error"

const Blog = ({match}) =>(
    <Fragment>
        <Switch>
            <Route
                exact path={`${match.url}`} component={AddContainer} />
            <Route
                path={`${match.url}/find`} component={FindBlogContainer} />
            <Route
                path={`${match.url}/edit/:id`} component={FindBlogContainer} />

            <Route component={Error} />
        </Switch>
    </Fragment>
)

export default withRouter(Blog);