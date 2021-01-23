import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {MainArea} from "../../components/AppLayout/AppLayout.Styled";
import {useSelector} from "react-redux";
import MovieDetail from "./MovieDetail";

function Detail(props){
    const {
        match
    } = props;

    const {
        movie = []
    } = useSelector(state => state?.app);

    const [post, setPost] = useState({});
    const [otherPost, setOtherPost] = useState({});

    const id = Number(match.params.id);

    useEffect(() => {
        const postResult = movie.length && movie.find((i) => id === i.id);
        setPost(postResult);
    }, [movie, id]);

    useEffect(() => {
        const genreArr = post.genres;
        const otherPostResult = genreArr && movie.filter((item) => {
            for(let i=0; i<genreArr.length; i++){
                if(item.genres.indexOf(genreArr[i]) !== -1) return true;
            }
        });
        setOtherPost(otherPostResult);
    }, [post]);


    return(
        <Container background={post.background_image_original}>
            <MainAreaStyled>
                <MovieDetail post={post} otherPost={otherPost} />
            </MainAreaStyled>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: #202020 ${(props) => props.background && `url(${props.background})`} no-repeat center top /cover;
  transition: background-image 0.5s .1s;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`
const MainAreaStyled = styled(MainArea)`
    z-index: 2;
`

export default Detail;