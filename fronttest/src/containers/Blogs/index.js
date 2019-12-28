import React , { Fragment }from "react";
import { Switch, Route } from 'react-router-dom'

import AddForm from "../../component/Blog/AddForm";

const Blog = ({match}) =>(
    <Fragment>
        <Switch>
            <Route exact path={`${match.url}`} component={AddForm} />
        </Switch>
    </Fragment>
)

export default Blog;