import React from "react";
import styled from "styled-components";
import MovieList from "../../components/MovieList";

function Home(){
    
    return(
        <Container>
            <MovieList itemlistTitle={"인기 컨텐츠"} />
            <MovieList itemlistTitle={"ye-r1님이 시청중인 컨텐츠"} />
            <MovieList itemlistTitle={"로맨스 영화"} />
            <MovieList itemlistTitle={"액션 영화"} />
            <MovieList itemlistTitle={"드라마"} />
        </Container>
    )
}

const Container = styled.div`

`

export default Home;