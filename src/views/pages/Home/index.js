import React from "react";
import {useSelector} from "react-redux";
import MovieListController from "../../components/MovieList/MovieListController";
import MainList from "./MainList";

function Home() {
    const {
        app : {Movies = []},
        user : {isLoggedIn = false, LoginData : {myList = [], nickname = ""}}
    } = useSelector(state => state);

    const [MovieListFilter] = MovieListController(Movies, myList);


    return (
        <MainList
            MovieListFilter={MovieListFilter}
            isLoggedIn={isLoggedIn}
            nickname={nickname}
            myList={myList}
        />
    )
}

export default Home;