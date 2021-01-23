import React from "react";
import {
    Description, Genre, Genres, ItemGroup, ItemImage,
    ItemIMG, ItemInfo, MovieInfo, OtherMovieList, OtherMovies, Rating, Runtime, Title, Year
} from "./MovieDetail.Styled";
import MovieItem from "../../components/MovieList/MovieItem";

function MovieDetail(props){
    const {
        post,
        otherPost
    } = props;

    return(
        <MovieInfo>
            <ItemGroup>
                <ItemImage><ItemIMG src={post.medium_cover_image} alt=""/></ItemImage>
                <ItemInfo>
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
                </ItemInfo>
            </ItemGroup>
        </MovieInfo>
    )
}


export default MovieDetail;