import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import MovieItem from "./MovieItem";
import styled from "styled-components";

function MovieList(props) {
    const {
        itemlistTitle,
        genres
    } = props;

    const {
        movie = []
    } = useSelector(state => state?.app);

    const result = movie.filter((i) => i.genres.indexOf(genres) !== -1);


    return(
        <List>
            <h2>{itemlistTitle}</h2>
            <MovieItem item={result} />
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