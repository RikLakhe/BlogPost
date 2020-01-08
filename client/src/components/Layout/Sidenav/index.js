import React, {Fragment} from 'react'
import {Link} from 'react-router-dom';
import styled from "styled-components";

import menuRoute from "../../../constants/menuRoute";
import {appConfig} from "../../../constants/appConfig";


import Writing from "../../../assets/icons/writing.png"

import './index.css'

const AppSideNav = props => {
    const windowsUrl = props.location.pathname;

    const SideNav = styled.div`
        margin: 0;
        padding: 0;
        width: ${100 - 87}%;
        background-color: ${appConfig.color.secondary};
        position: fixed;
        height: 100%;
        overflow: auto;
        z-index:100;
    `;

    const SideNavIcon = styled.img`
        width: 90%;
        padding: 20px;
    `

    const ULItems = styled.ul`
        list-style-type:none;
        padding: 10px 0 0 0;
        margin-left : 10px;
        font-size: smaller;
    `

    const LinkItemSelected = styled.li`
        padding-top:20px;
        padding-bottom:20px;
        font-size: xx-large;
        text-decoration-line: underline;
        text-decoration-style: solid;
        text-decoration-color: ${appConfig.color.unique};
        text-decoration-thickness: 5px;
    `

    const LinkItemUnSelected = styled.li`
        padding-top:5px;
        padding-bottom:5px;
        font-size: smaller;
        text-decoration: none;
    `

    return (
        <SideNav>
            <SideNavIcon src={Writing} alt={"ICON"}/>
            <hr/>
            <ULItems>
                {
                    menuRoute.map(item => {
                        if (windowsUrl === item.path) {
                            return (<LinkItemSelected>{<Link className={'side-nav-selected'} to={item.path}
                                                             key={item.menuName} disabled>{item.name}</Link>}</LinkItemSelected>)
                        } else {
                            return (<LinkItemUnSelected>{<Link className={'side-nav-unselected'} to={item.path}
                                                               key={item.menuName}>{item.name}</Link>}</LinkItemUnSelected>)
                        }
                    })
                }
            </ULItems>
        </SideNav>
    )
};

export default AppSideNav;