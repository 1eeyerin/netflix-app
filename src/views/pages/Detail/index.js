import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import MovieDetail from "./MovieDetail";
import {DetailGroup, MainAreaStyled} from "./index.Styled";

function Detail(props){
    const {
        match
    } = props;

    const {
        Movies = []
    } = useSelector(state => state?.app);

    const [post, setPost] = useState({});
    const [otherPost, setOtherPost] = useState({});
    const id = Number(match.params.id);

    useEffect(() => {
        const postResult = Movies.length && Movies.find((i) => id === i.id);
        setPost(postResult);
    }, [Movies, id]);

    useEffect(() => {
        const genreArr = post.genres;
        const otherPostResult = genreArr && Movies.filter((item) => {
            for(let i=0; i<genreArr.length; i++){
                if(item.genres.indexOf(genreArr[i]) !== -1 && post.id !== item.id) return true;
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