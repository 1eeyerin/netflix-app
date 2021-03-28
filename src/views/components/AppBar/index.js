import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Header, HeaderLeft, HeaderRight, HeaderWrap} from "./AppBar.Styled";
import {useSelector} from "react-redux";
import {useAuth} from "../../../hooks/useAuth";

function AppBar() {

    const {
        isLoggedIn = false,
        LoginData: {
            nickname
        },
        loaded
    } = useSelector(state => state.user);

    const {signIn, signOut} = useAuth();

    return (
        <Header>
            <HeaderWrap>
                <HeaderLeft>
                    <h1><Link to="/">Movie App</Link></h1>
                    <ul>
                        <li><Link to="/genre">Genre</Link></li>
                        {isLoggedIn && <li><Link to="/member/my-list">MyList</Link></li>}
                    </ul>
                </HeaderLeft>
                <HeaderRight>
                    {
                        loaded &&
                        <ul>
                            {isLoggedIn ? (
                                <>
                                    <li>{nickname}님</li>
                                    <li><Link to="/member/logout" onClick={signOut}>logout</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/member/login">login</Link></li>
                                    <li>
                                        <ButtonLogin onClick={signIn}>
                                            google login
                                        </ButtonLogin>
                                    </li>
                                </>
                            )}
                        </ul>
                    }
                </HeaderRight>
            </HeaderWrap>
        </Header>
    )
}

const ButtonLogin = styled.button`
`

export default AppBar;