import React from 'react'
import styled from "styled-components";

const AppBody = props => {
    const Body = styled.div`
       margin: 0;
       padding: 0;
       position:fixed;
       height: 100%;
        width: 100%
    `;

    const Boxed = styled.div`
        height: 100%;
        width: 100%
        padding: 10px;
    `;

    return (
        <Body>
            <Boxed children={props.children}/>
        </Body>
    )
};

export default AppBody;