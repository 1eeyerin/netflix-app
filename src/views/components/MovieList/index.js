import React from "react";
import MovieItem from "./MovieItem";
import styled from "styled-components";

function MovieList(props) {
    const {itemlistTitle, result, sorting} = props;


    return(
        <List>
            <h2>{itemlistTitle}</h2>
            <MovieItem item={result} sorting={sorting} />
        </List>
    )
}


const List = styled.div`
  color: #fff;
  padding: 15px 0;
  h2 {
    font-size: 15px;
  }
`

export default MovieList;