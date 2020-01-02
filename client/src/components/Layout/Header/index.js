import React, {useState, useEffect, useContext} from 'react'
import styled from "styled-components";

import "./index.css"

import Menu from '../../../assets/icons/menu.png'
import {appConfig} from '../../../constants/AppConfig.js'
import {AuthContext} from "../../Context/AppContext/AuthContext";
import {Link} from "react-router-dom";

const AppHeader = props => {
    const [showMenu, setShowMenu] = useState(false);
    const {authenticated} = useContext(AuthContext);

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
        height:40px;
        float:right;
        padding-right : 10px;
    `
    const TopNavMenu2 = styled.div`
        width:150px;
        height:40px;
        float:right;
        padding : 10px 5px 0px 0px;
        color: white;
        
         a{
            color: white;
            text-decoration: none;
            text-align: right;
            font-size: smaller;
        }
        
         a:hover{
          font-size: large;
          text-decoration-line: underline;
          text-decoration-style: solid;
          text-decoration-color: ${appConfig.color.unique};
          text-decoration-thickness: 5px;
        }
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
            padding: 10px 10px 10px 0px;
            text-decoration: none;
            display: block;
            text-align: right;
            font-size: smaller;
        }
        
        hr{
            padding: 0;
            margin:0;
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
                    {
                        authenticated ?
                            <a href="javascript:void(0)" className="dropbtn" onClick={() => setShowMenu(!showMenu)}><TopNavMenu
                                src={Menu} alt={"Menu"}/></a>
                            :
                            <TopNavMenu2>
                                <Link to={"/sign-in"}>Sign In</Link> / <Link to={"/sign-in/new"}>Sign Up</Link>
                            </TopNavMenu2>
                    }
                    <TopNavMenuItem>
                        <TopNavbarContent>
                            <Link to={"/profile"}>Profile</Link>
                            <hr/>
                            <Link to={"/sign-out"}>Sign Out</Link>
                        </TopNavbarContent>
                    </TopNavMenuItem>
                </li>
            </TopNavbar>
        </Header>
    )
};

export default AppHeader;