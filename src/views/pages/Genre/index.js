import React from "react";
import {useSelector} from "react-redux";
import MovieListController from "../../components/MovieList/MovieListController";
import GenreList from "./GenreList";

function Genre() {
    const {
        app : {Movies = []},
    } = useSelector(state => state);

    const [MovieListFilter] = MovieListController({Movies});

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        touchMove: false,
    };


    return (
        <GenreList
            MovieListFilter={MovieListFilter}
            settings={settings}
        />
    )
}

export default Genre;