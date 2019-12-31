import React , { Fragment }from "react";
import {Switch, Route, withRouter} from 'react-router-dom'

import HomeContainer from "../Home/HomeBlog";
import AddContainer from "../../containers/Blog/AddBlogForm";
import EditContainer from "../../containers/Blog/EditBlogForm";

import Error from "../Exception/Error"

const Blog = ({match}) =>(
    <Fragment>
        <Switch>
            <Route
                exact path={`${match.url}`} component={AddContainer} />
            <Route
                path={`${match.url}/edit/:id`} component={EditContainer} />

            <Route component={Error} />
        </Switch>
    </Fragment>
)

export default withRouter(Blog);