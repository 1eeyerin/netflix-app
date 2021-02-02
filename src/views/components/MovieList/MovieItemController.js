import React, {useState, useEffect} from "react";
import utils from "../../../utils";

function MovieItemController(item, sorting){
    const [movieList, setMovieList] = useState({});

    useEffect(() => {
        if(sorting !== false) {
            const result = utils({name:"descending", item:item, target:"rating"});
            setMovieList(result);
        } else {
            setMovieList(item);
        }
    }, [item, movieList]);

    return [movieList];
}

export default MovieItemController;