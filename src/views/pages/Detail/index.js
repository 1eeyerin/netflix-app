import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {MainArea} from "../../components/AppLayout/AppLayout.Styled";
import {useSelector} from "react-redux";
import {appActions} from "../../../redux/actionCreators";
import Info from "./Info";

function Detail(props){
    const {
        match
    } = props;

    const {
        movie = []
    } = useSelector(state => state?.app);

    const [post, setPost] = useState({});
    const id = Number(match.params.id);

    useEffect(() => {
        if(!movie.length){
            console.log('@@ detail page : start getMovies action');
            appActions.getMovies();
        }
    }, []);

    useEffect(() => {
        const result = movie.length && movie.find((i) => id === i.id);
        setPost(result);
    }, [movie]);


    return(
        <Container background={post.background_image_original}>
            <MainAreaStyled>
                <Info post={post}/>
            </MainAreaStyled>
        </Container>
    )
}

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background: #202020 ${(props) => props.background && `url(${props.background})`} no-repeat center top /cover;
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