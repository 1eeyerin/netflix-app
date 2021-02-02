import React from "react";
import {Item, ItemImage, ItemIMG, ItemTitle, MovieListItem} from "./MovieItem.Styled";
import {Link} from "react-router-dom";
import MovieItemController from "./MovieItemController";

function MovieItem(props) {
    const {item, sorting} = props;
    const [movieList] = MovieItemController(item, sorting);

    return (
        <Item>
            {
                movieList.length && movieList.map((i) => {
                    return (
                        <MovieListItem key={i.id}>
                            <Link to={`/detail/${i.id}`}>
                                <ItemImage>
                                    <ItemIMG src={i.large_cover_image} alt={i.title}/>
                                </ItemImage>
                                <ItemTitle>{i.title}</ItemTitle>
                            </Link>
                        </MovieListItem>
                    )
                })
            }
        </Item>
    )
}


export default MovieItem;