import React, {Fragment} from 'react'
import styled from "styled-components";

const AppSideNav = props => {
    const SideNav = styled.div`
        margin: 0;
        padding: 0;
        width: ${100-90}%;
        background-color: #f1f1f1;
        position: fixed;
        height: 100%;
        overflow: auto;
    `;

    return (
        <SideNav>
            this is side
        </SideNav>
    )
};

export default AppSideNav;