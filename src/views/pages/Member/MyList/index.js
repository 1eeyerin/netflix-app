import React from "react";
import {useSelector} from "react-redux";
import MovieListController from "../../../components/MovieList/MovieListController";
import MyMovieList from "./MyMovieList";

function MyList(){
    const {
        app : {Movies = []},
        user : {isLoggedIn = false, LoginData : {myList = [], nickname = ""}}
    } = useSelector(state => state);

    const [MovieListFilter] = MovieListController(Movies, myList);

    return(
        <MyMovieList
            isLoggedIn={isLoggedIn}
            MovieListFilter={MovieListFilter}
            nickname={nickname}
            myList={myList}
        />
    )
}


export default MyList;