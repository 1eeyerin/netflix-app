import React from "react";
import {
    Description, Genre, Genres, ItemGroup, ColLeft, ColRight, PosterImage,
    PosterIMG, MovieInfo, OtherMovieList, OtherMovies, Rating, Runtime, Title, Year,
    LikeButton, HeartIcon
} from "./MovieDetail.Styled";
import MovieItem from "../../components/MovieList/MovieItem";
import {FaCheckCircle} from "react-icons/fa";
import cn from "classnames";

function MovieDetail(props){
    const {
        post, otherPost, isLiked, isLoggedIn, toggleLikeButton
    } = props;


    return(
        <MovieInfo>
            <ItemGroup>
                <ColLeft>
                    <PosterImage><PosterIMG src={post.medium_cover_image} alt=""/></PosterImage>
                    {
                        isLoggedIn &&
                        <LikeButton
                            type="button"
                            onClick={() => toggleLikeButton(isLiked)}
                            className={cn({active: isLiked})}>
                            {isLiked ? <AddedLikeList /> : <AddLikeList />}
                        </LikeButton>
                    }
                </ColLeft>
                <ColRight>
                    <Title>{post.title_long}</Title>
                    <Year>{post.year}</Year>
                    <Rating>
                        별점 : ⭐{post.rating}
                    </Rating>
                    <Description>{post.description_full}</Description>
                    <Runtime>전체 : {post.runtime}분</Runtime>
                    <Genre>
                        장르 :
                        {
                            post.genres && post.genres.map((i,idx) => {
                                return <Genres key={idx}>{i}</Genres>
                            })
                        }
                    </Genre>
                    <OtherMovies>
                        <h3>{post.title} 와 비슷한 작품</h3>
                        {
                            otherPost &&
                            typeof(otherPost) !== undefined && otherPost.length &&
                            <MovieItem item={otherPost} />
                        }
                        <OtherMovieList>
                        </OtherMovieList>
                    </OtherMovies>
                </ColRight>
            </ItemGroup>
        </MovieInfo>
    )
}


function AddedLikeList() {
    return (
        <><FaCheckCircle /> <span>보관함에 추가됨</span></>
    )
}

function AddLikeList() {
    return (
        <><HeartIcon /> <span>보관함에 추가</span></>
    )
}



export default MovieDetail;