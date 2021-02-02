import React from "react";
import {MainArea} from "../../components/AppLayout/AppLayout.Styled";
import MovieList from "../../components/MovieList";
import {useSelector} from "react-redux";
import HomeController from "./HomeController";

function Home() {
    const {
        app : {Movies = []},
        user : {isLoggedIn = false, LoginData : {myList = []}}
    } = useSelector(state => state);

    const [movieListFilter] = HomeController(Movies, myList);

    return (
        <MainArea>
            <MovieList
                itemlistTitle={"인기 컨텐츠"}
                result={movieListFilter("genres","Action")}/>
            {
                isLoggedIn &&
                <MovieList
                    itemlistTitle={"ye-r1님이 좋아하는 컨텐츠"}
                    result={movieListFilter("myList")}
                    sorting={false}/>
            }
            <MovieList
                itemlistTitle={"드라마"}
                result={movieListFilter("genres","Drama")}/>
            <MovieList
                itemlistTitle={"코미디 영화"}
                result={movieListFilter("genres","Comedy")}/>
            <MovieList
                itemlistTitle={"로맨스 영화"}
                result={movieListFilter("genres","Romance")}/>
            <MovieList
                itemlistTitle={"액션 영화"}
                result={movieListFilter("genres","Action")}/>
        </MainArea>
    )
}

export default Home;