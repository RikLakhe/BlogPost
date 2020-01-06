import React, {useEffect} from "react";
import {Route, Redirect} from "react-router-dom"

import {useAuth0} from "../components/Context/Auth0Context/react-auth0-spa";

export const PublicRoute = ({component: Component, layout: Layout, ...rest}) => (
    <Route
        {...rest}
        render={props => (
            <Layout>
                <Component {...props}/>
            </Layout>
        )}
    />
);

export const PrivateRoute = ({path, component: Component, layout: Layout, ...rest}) => {
    const {isAuthenticated} = useAuth0();

    return <Route path={path} {...rest}
                  render={props =>
                      isAuthenticated ? (
                          <Layout>
                              <Component {...props}/>
                          </Layout>
                      ) : (
                          <Redirect to={"/"}/>
                      )}/>;
};