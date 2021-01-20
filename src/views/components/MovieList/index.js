import React from "react";
import MovieLayout from "./movieLayout";

function MovieList() {
    return (
        <>
            <MovieLayout itemlistTitle={"인기 컨텐츠"} genres={"Action"} />
            <MovieLayout itemlistTitle={"ye-r1님이 시청중인 컨텐츠"} genres={"Action"}/>
            <MovieLayout itemlistTitle={"드라마"} genres={"Drama"}/>
            <MovieLayout itemlistTitle={"코미디 영화"} genres={"Comedy"}/>
            <MovieLayout itemlistTitle={"로맨스 영화"} genres={"Romance"}/>
            <MovieLayout itemlistTitle={"액션 영화"} genres={"Action"}/>
        </>
    );
}


export default MovieList;