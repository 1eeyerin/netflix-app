import React from "react";
import {MainArea} from "../../components/AppLayout/AppLayout.Styled";
import MovieList from "../../components/MovieList";
import {useSelector} from "react-redux";

function Home() {
    const {isLoggedIn = false} = useSelector(state => state.user);

    return (
        <MainArea>
            <MovieList itemlistTitle={"인기 컨텐츠"} genres={"Action"} />
            {isLoggedIn && <MovieList itemlistTitle={"ye-r1님이 좋아하는 컨텐츠"} genres={"Action"}/>}
            <MovieList itemlistTitle={"드라마"} genres={"Drama"}/>
            <MovieList itemlistTitle={"코미디 영화"} genres={"Comedy"}/>
            <MovieList itemlistTitle={"로맨스 영화"} genres={"Romance"}/>
            <MovieList itemlistTitle={"액션 영화"} genres={"Action"}/>
        </MainArea>
    )
}

export default Home;