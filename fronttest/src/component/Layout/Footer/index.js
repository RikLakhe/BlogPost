import React,{Fragment} from 'react'
import styled from "styled-components";

import {appConfig} from '../../../constants/AppConfig.js'

const AppFooter = props =>{
    const Footer = styled.footer`
        position: fixed;
        bottom:0;
        background: ${appConfig.color.secondary};
        width: 100%;
        padding: 10px;
    `;

    return(
        <Footer>
            this is footer
        </Footer>
    )
};

export default AppFooter;