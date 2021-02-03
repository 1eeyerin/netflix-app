import React from "react";
import {useSelector} from "react-redux";
import MovieListController from "../../../components/MovieList/MovieListController";
import MyMovieList from "./MyMovieList";

function MyList(){
    const {
        app : {Movies = []},
        user : {isLoggedIn = false, LoginData : {myList = [], nickname = ""}}
    } = useSelector(state => state);

    const [MovieListFilter] = MovieListController({Movies, myList});

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        touchMove: false,
    };

    return(
        <MyMovieList
            isLoggedIn={isLoggedIn}
            MovieListFilter={MovieListFilter}
            nickname={nickname}
            myList={myList}
            settings={settings}
        />
    )
}


export default MyList;