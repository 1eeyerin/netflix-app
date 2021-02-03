import React from "react";
import MovieList from "../../components/MovieList";
import {MainArea} from "../../components/AppLayout/AppLayout.Styled";

function GenreList(props){
    const {
        MovieListFilter = {},
        settings
    } = props;

    return(
        <MainArea>
            <MovieList
                itemlistTitle={"드라마"}
                settings={settings}
                item={MovieListFilter({el:"genres", val:"Drama"})}/>
            <MovieList
                itemlistTitle={"코미디 영화"}
                settings={settings}
                item={MovieListFilter({el:"genres", val:"Comedy"})}/>
            <MovieList
                itemlistTitle={"다큐멘터리 영화"}
                settings={settings}
                item={MovieListFilter({el:"genres", val:"Documentary"})}/>
            <MovieList
                itemlistTitle={"판타지 영화"}
                settings={settings}
                item={MovieListFilter({el:"genres", val:"Fantasy"})}/>
            <MovieList
                itemlistTitle={"음악 영화"}
                settings={settings}
                item={MovieListFilter({el:"genres", val:"Music"})}/>
            <MovieList
                itemlistTitle={"로맨스 영화"}
                settings={settings}
                item={MovieListFilter({el:"genres", val:"Romance"})}/>
            <MovieList
                itemlistTitle={"액션 영화"}
                settings={settings}
                item={MovieListFilter({el:"genres", val:"Action"})}/>
        </MainArea>
    )
}


export default GenreList;