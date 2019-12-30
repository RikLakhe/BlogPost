import React from 'react'
import styled from "styled-components";

const AppBody = props =>{
    const Body = styled.div`
        position: fixed;
        padding: 10px 5px 5px 10px;
        width: 89%;
        height: 100%;
    `;

    const Boxed = styled.div`
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 3px;
        box-shadow: 1px 2px 2px rgba(0, 0, 0, .2);
        height: 80%;
        padding : 10px;
    `

    return(
        <Body>
            <Boxed children={props.children} />
        </Body>
    )
};

export default AppBody;