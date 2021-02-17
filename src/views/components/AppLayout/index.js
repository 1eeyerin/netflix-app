import React from "react";
import styled from "styled-components";
import AppBar from "../AppBar";

function AppLayout({children}){

    return(
        <Container>
            <AppBar />
            <MainContainer>
                {children}
            </MainContainer>
        </Container>
    )
}
const Container = styled.div`
  font-size: 13px;
`
const MainContainer = styled.main`
`

export default AppLayout;