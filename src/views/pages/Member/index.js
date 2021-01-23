import React from "react";
import styled from "styled-components";
import {Route, Switch} from "react-router-dom";
import Login from "./Login";
import MyList from "./MyList";
import Join from "./Join";
import Profile from "./Profile";

function Member(){
    
    return(
        <Container>
            <Switch>
                <Route path={"/member/login"} component={Login} />
                <Route path={"/member/join"} component={Join} />
                <Route path={"/member/my-list"} component={MyList} />
                <Route path={"/member/profile"} component={Profile} />
            </Switch>
        </Container>
    )
}

const Container = styled.div`

`

export default Member;