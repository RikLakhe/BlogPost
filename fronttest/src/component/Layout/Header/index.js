import React,{Fragment} from 'react'
import styled from "styled-components";

import {appConfig} from '../../../constants/AppConfig.js'

const AppHeader = props =>{
    const Header = styled.div`
        position: fixed;
        top:0;
        background: ${appConfig.color.secondary};
        width: 100%;
        padding: 10px;
    `;

    return(
        <Header>
            this is header
        </Header>
    )
};

export default AppHeader;