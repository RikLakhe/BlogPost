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
    const {loading,isAuthenticated,loginWithRedirect} = useAuth0();

    useEffect(() => {
        if (loading || isAuthenticated) {
            return;
        }
        const fn = async () => {
            await loginWithRedirect({
                appState: { targetUrl: path }
            });
        };
        fn();
    }, [loading, isAuthenticated, loginWithRedirect, path]);

    const render = props =>
        isAuthenticated === true ? <Component {...props} /> : null;

    return <Route path={path} render={render} {...rest} />;
};