import React from "react";
import {useSelector} from "react-redux";
import MovieDetail from "./MovieDetail";
import {DetailGroup, MainAreaStyled} from "./index.Styled";
import DetailController from "./DetailController";

function Detail(props){
    const {match} = props;
    const id = Number(match.params.id);
    const {
        app : {Movies = []},
        user : {
            LoginData: {myList = []},
            isLoggedIn
        }
    } = useSelector(state => state);

    const [post, otherPost, isLiked, toggleLikeButton] = DetailController(id, Movies, myList);


    return(
        <DetailGroup background={post.background_image_original}>
            <MainAreaStyled>
                <MovieDetail
                    post={post}
                    otherPost={otherPost}
                    isLiked={isLiked}
                    isLoggedIn={isLoggedIn}
                    toggleLikeButton={toggleLikeButton}
                />
            </MainAreaStyled>
        </DetailGroup>
    )
}

export default Detail;