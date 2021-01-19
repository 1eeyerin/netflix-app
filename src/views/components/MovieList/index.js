import React, {useEffect} from "react";
import styled from "styled-components";
import MovieItem from "./movieItem";
import {appActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";
import store from "../../../redux/store";

function MovieList(props) {
    const {
        itemlistTitle
    } = props;

    useEffect(() => {
        appActions.getMovies();
    }, []);

    const state = useSelector(state => state.app.movies);

    return (
        <List>
            <h2 onClick={()=> console.log('@@ state',state)}>{itemlistTitle}</h2>
            <MovieItem />
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

export default MovieList;