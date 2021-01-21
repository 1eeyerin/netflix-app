import React, {useState, useEffect} from "react";
import {
    Description, Genre, Genres, ItemGroup, ItemImage,
    ItemIMG, ItemInfo, MovieInfo, Rating, Runtime, Title
} from "./Info.Styled";

function Info(props){
    const {
        post
    } = props;

    return(
        <MovieInfo>
            <ItemGroup>
                <ItemImage><ItemIMG src={post.medium_cover_image} alt=""/></ItemImage>
                <ItemInfo>
                    <Title>{post.title_long}</Title>
                    <div>{post.year}</div>
                    <Rating>
                        별점 : ⭐{post.rating}
                    </Rating>
                    <Runtime>전체 : {post.runtime}분</Runtime>
                    <Genre>
                        장르 :
                        {
                            post.genres && post.genres.map((i) => {
                                return <Genres>{i}</Genres>
                            })
                        }
                    </Genre>
                    <Description>{post.description_full}</Description>
                </ItemInfo>
            </ItemGroup>
        </MovieInfo>
    )
}


export default Info;