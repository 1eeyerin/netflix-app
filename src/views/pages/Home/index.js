import React from "react";
import {useSelector} from "react-redux";
import MovieListController from "../../components/MovieList/MovieListController";
import MainList from "./MainList";

function Home() {
    const {
        app : {Movies = [], bestMovies = []},
        user : {isLoggedIn = false, LoginData : {myList = [], nickname = ""}}
    } = useSelector(state => state);

    const [MovieListFilter] = MovieListController({Movies, myList, bestMovies});

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        touchMove: false,
    };


    return (
        <MainList
            MovieListFilter={MovieListFilter}
            isLoggedIn={isLoggedIn}
            nickname={nickname}
            myList={myList}
            settings={settings}
        />
    )
}

export default Home;