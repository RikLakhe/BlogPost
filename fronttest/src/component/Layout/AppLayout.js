import React, {Fragment} from "react";
import styled from "styled-components";

import AppHeader from "./Header";
import AppSideNav from "./Sidenav";
import AppBody from "./Body";
import AppFooter from "./Footer";

const AppLayout = props => {
    const Content = styled.div`
        margin-left: ${100 - 87}%;
        height: 100%;
    `;

    return (
        <Fragment>
            <AppSideNav {...props.children.props}/>
            <Content>
                <AppHeader {...props.children}/>
                <AppBody {...props.children}>{props.children}</AppBody>
                <AppFooter {...props.children}/>
            </Content>

        </Fragment>
    )
}

export default AppLayout;