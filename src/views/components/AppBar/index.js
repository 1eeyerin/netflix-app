import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

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

const Header = styled.header`
  border-bottom: 1px solid #333;
  background: #121212;
  font-size: 13px;
`
const HeaderWrap = styled.div`
  height: 50px;
  max-width: 1400px;
  margin: 0 auto;
  width: 93%;
  display: flex;
  align-items: center;

  h1 {
    margin-right: 10px;
    color: #c30000;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    font-size: inherit;
  }

  ul {
    display: flex;
    align-items: center;
    height: 50px;

    li {
      padding: 0 20px;
    }
  }
`

export default AppBar;