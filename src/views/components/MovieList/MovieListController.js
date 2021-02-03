import React from "react";
import utils from "../../../utils";

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
            result = utils({name:"descending", item: result, target:"rating"});
        }

        return result;
    }

    return [MovieListFilter];
}

export default MovieListController;