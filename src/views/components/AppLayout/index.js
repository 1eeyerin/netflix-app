import React from "react";
import styled from "styled-components";
import AppBar from "../AppBar";

function AppLayout({children}){
    
    return(
        <Container>
            <AppBar />
            <MainArea>
                {children}
            </MainArea>
        </Container>
    )
}
const Container = styled.div`
  font-size: 13px;
`
const MainArea = styled.div`
  max-width: 93%;
  margin: 0 auto;
  padding: 40px 0;
`

export default AppLayout;