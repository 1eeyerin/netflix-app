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
    
    useEffect(() => {
        console.log('@@ loaded',loaded);
    }, [loaded])
    
    return (
        <Header>
            <HeaderWrap>
                <HeaderLeft>
                    <h1><Link to="/">Movie App</Link></h1>
                    <ul>
                        <li><Link to="/genre">Genre</Link></li>
                        {isLoggedIn && <li><Link to="/member/my-list">MyList</Link></li>}
                        <li><Link to="/search">Search</Link></li>
                    </ul>
                </HeaderLeft>
                <HeaderRight>
                    {
                        loaded &&
                        <ul>
                            {isLoggedIn ? (
                                <>
                                    <li><Link to="/member/profile">{nickname}님의 프로필</Link></li>
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