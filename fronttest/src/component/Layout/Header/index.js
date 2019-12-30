import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import {appConfig} from '../../../constants/AppConfig.js'
import Menu from '../../../assets/icons/menu.png'
import "./index.css"

const AppHeader = props => {
    const [showMenu, setShowMenu] = useState(false);

    const Header = styled.div`
          margin: 0;
          padding: 0;
    `;

    const TopNavbar = styled.ul`
          list-style-type: none;
          margin: 0;
          padding: 0;
          overflow: hidden;
          background-color:${appConfig.color.secondary};
          height: 40px;
    `;

    const TopNavMenu = styled.img`
        width:30px;
        height: 40px;
        float: right;
        padding-right : 10px;
    `

    const TopNavMenuItem = styled.div`
        display: ${showMenu ? 'block' : 'none'};
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        z-index: 1050;
    `

    const TopNavbarContent = styled.div`
        position: absolute;
        right: 0;
        top: 51px;
        margin-right:10px;
        min-width: 98px;
        background-color:${appConfig.color.secondary};
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        border: 1px solid rgba(0, 0, 0, .2);
        border-radius: 3px;
        
        a{
            color: white;
            padding: 10px 10px 10px 0;
            text-decoration: none;
            display: block;
            text-align: right;
            font-size: smaller;
        }
        
        a:hover{
            text-decoration-line: underline;
            text-decoration-style: solid;
            text-decoration-color: ${appConfig.color.unique};
            text-decoration-thickness: 5px;
        }
    `;

    const handleClickOutside = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        if (showMenu) {
            document.addEventListener('click', handleClickOutside, true);
        }
    });

    return (
        <Header>
            <TopNavbar>
                <li className={"top-navbar-right dropdown"}>
                    <a href="javascript:void(0)" className="dropbtn" onClick={() => setShowMenu(!showMenu)}><TopNavMenu
                        src={Menu} alt={"Menu"}/></a>
                    <TopNavMenuItem>
                        <TopNavbarContent>
                            <a href="#">Profile</a>
                            <hr/>
                            <a href="#">Sign Out</a>
                        </TopNavbarContent>
                    </TopNavMenuItem>
                </li>
            </TopNavbar>
        </Header>
    )
};

export default AppHeader;