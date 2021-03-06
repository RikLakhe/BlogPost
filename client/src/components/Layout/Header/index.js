import React, {useState, useEffect} from 'react'
import styled from "styled-components";

import "./index.css"

import {appConfig} from '../../../constants/appConfig.js'
import {useAuth0} from "../../Context/Auth0Context/react-auth0-spa";
import {Link} from "react-router-dom";
import {Button} from "antd";

const AppHeader = props => {
    const [showMenu, setShowMenu] = useState(false);
    const {isAuthenticated, loginWithRedirect, logout} = useAuth0();

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
                    {!isAuthenticated && (
                        <Button type="link" onClick={() => loginWithRedirect({})}>Sign In / Sign Up</Button>)}
                    {isAuthenticated && (<Link style={{color:'white'}} to="/profile">Profile</Link>)}
                    {isAuthenticated && <Button type={"link"} onClick={() => logout()}>Log out</Button>}
                </li>
            </TopNavbar>
        </Header>
    )
};

export default AppHeader;