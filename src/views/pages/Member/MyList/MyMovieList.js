import React from "react";
import {MainArea} from "../../../components/AppLayout/AppLayout.Styled";
import MovieList from "../../../components/MovieList";
import styled from "styled-components";
import _ from "lodash";

function MyMovieList(props){
    const {
        isLoggedIn, MovieListFilter, nickname, myList, settings
    } = props;

    return(
        <MainArea>
            {
                (isLoggedIn && !_.isEmpty(myList)) &&
                <MovieList
                    itemlistTitle={`${nickname}님이 좋아하는 컨텐츠`}
                    settings={settings}
                    item={MovieListFilter({el:"myList", sorting:false})}
                    sorting={false}/>
            }
            {!myList.length && <ErrorMessage />}
        </MainArea>
    )
}

function ErrorMessage() {
    return (
        <Message>보관하신 컨텐츠가 없습니다.</Message>
    )
}

const Message = styled.div`
  opacity: 0.2;
  font-size: 14px;
`

export default MyMovieList;