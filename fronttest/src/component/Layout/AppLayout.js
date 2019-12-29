import React, {Fragment} from "react";
import styled from "styled-components";

import AppHeader from "./Header";
import AppSideNav from "./Sidenav";
import AppBody from "./Body";
import AppFooter from "./Footer";

const AppLayout = props => {
    const Content = styled.div`
        margin-left: ${100-90}%;
        height: 100%;
    `;

    return (
        <Fragment>
            <AppSideNav/>
            <Content>
                <AppHeader/>
                <AppBody>{props.children}</AppBody>
                <AppFooter/>
            </Content>

        </Fragment>
    )
}

export default AppLayout;