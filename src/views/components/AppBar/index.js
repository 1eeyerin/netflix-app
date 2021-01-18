import React from "react";
import {Link} from "react-router-dom";
import {Header, HeaderWrap} from "./AppBar.Styled";

function AppBar() {

    return (
        <Header>
            <HeaderWrap>
                <h1><Link to="/">Movie App</Link></h1>
                <ul>
                    <li><Link to="/genre">Genre</Link></li>
                    <li><Link to="/my-list">MyList</Link></li>
                    <li><Link to="/search">Search</Link></li>
                </ul>
            </HeaderWrap>
        </Header>
    )
}

export default AppBar;