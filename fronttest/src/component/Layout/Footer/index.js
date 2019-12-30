import React,{Fragment} from 'react'
import {Link} from "react-router-dom";
import styled from "styled-components";

import {appConfig} from '../../../constants/AppConfig.js'

const AppFooter = props =>{
    const Footer = styled.footer`
        margin: 0;
        padding: 0;
        position: fixed;
        bottom: 0;
        right: 0;
        width:100%
        background-color: #bfbfbf;
        
        div{
            float: right;
        }
        
        a{
            text-decoration: none;
            color:black;
            font-size:12px;
            padding-right:10px;
        }
    `;

    return(
        <Footer>
            <div>
                <Link to={"/"}>©{" "}{appConfig.year},{appConfig.brand}. All Rights Reserved.</Link>
            </div>
        </Footer>
    )
};

export default AppFooter;