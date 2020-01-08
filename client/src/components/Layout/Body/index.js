import React from 'react'
import styled from "styled-components";

import Loader from "../Loading/Loader";
import {useAuth0} from "../../Context/Auth0Context/react-auth0-spa";

const AppBody = props => {
    const {loading} = useAuth0();

    const Body = styled.div`
       margin: 0;
       padding: 5px;
       position:fixed;
       height: 100%;
       width: 87%
    `;

    const Boxed = styled.div`
        height: 100%;
        width: 100%
        padding: 10px;
        overflow-y:scroll;
    `;

    return (
        <Body>
            {
                loading ?
                    <Loader center={true}/> : <Boxed children={props.children}/>
            }
        </Body>
    )
};

export default AppBody;