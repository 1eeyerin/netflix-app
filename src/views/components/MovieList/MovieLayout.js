import React from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";

function MovieLayout(props){
    const {
        itemlistTitle,
        genres
    } = props;

    return(
        <List>
            <h2>{itemlistTitle}</h2>
            <MovieItem genres={genres} />
        </List>
    )
}

const List = styled.div`
  color: #fff;
  padding: 15px 0;
  h2 {
    font-size: 15px;
    color: inherit;
  }
`

export default MovieLayout;