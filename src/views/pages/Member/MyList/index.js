import React from "react";
import styled from "styled-components";
import {useSelector} from "react-redux";

function MyList(){
    const {
        LoginData : {
            myList = [],
            nickname = ""
        }
    } = useSelector(state => state.user);
    
    console.log('@@ hi');
    console.log('@@ myList',myList);
    return(
        <Container>
            최근 {nickname}님이 좋아하시는 컨텐츠 : 
            {myList.map((item) => {
                return item
            })}
        </Container>
    )
}

const Container = styled.div`

`

export default MyList;