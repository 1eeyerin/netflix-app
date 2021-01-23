import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import MovieDetail from "./MovieDetail";
import {DetailGroup, MainAreaStyled} from "./index.Styled";

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
        <DetailGroup background={post.background_image_original}>
            <MainAreaStyled>
                <MovieDetail post={post} otherPost={otherPost} />
            </MainAreaStyled>
        </DetailGroup>
    )
}

export default Detail;