import React from "react";
import {descendingSort} from "../../../utils/common";

function MovieListController({Movies, myList, bestMovies}){

    const MovieListFilter = ({el, val, sorting}) => {
        let result;

        if(el === "genres") {
            result =  Movies.length && Movies.filter((i) => i.genres.indexOf(val) !== -1);
        }
        if(el === "myList") {
            result =  myList && myList.map(item => Movies.find(m => m.id === item));
        }
        if(el === "recommend") {
            result =  Movies.length && bestMovies.map(item => Movies.find(m => m.id === item));
        }
        if(sorting !== false) {
            result = descendingSort(result,"rating");
        }

        return result;
    }

    return [MovieListFilter];
}

export default MovieListController;