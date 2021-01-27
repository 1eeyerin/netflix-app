import React from "react";
import {Link} from "react-router-dom";
import {Header, HeaderLeft, HeaderRight, HeaderWrap} from "./AppBar.Styled";

function AppBar() {

    return (
        <Header>
            <HeaderWrap>
                <HeaderLeft>
                    <h1><Link to="/">Movie App</Link></h1>
                    <ul>
                        <li><Link to="/genre">Genre</Link></li>
                        <li><Link to="/member/my-list">MyList</Link></li>
                        <li><Link to="/search">Search</Link></li>
                    </ul>
                </HeaderLeft>
                <HeaderRight>
                    <ul>
                        <li><Link to="/member/profile">profile</Link></li>
                        <li><Link to="/member/join">join</Link></li>
                        <li><Link to="/member/login">login</Link></li>
                    </ul>
                </HeaderRight>
            </HeaderWrap>
        </Header>
    )
}

export default AppBar;