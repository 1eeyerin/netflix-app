import React, {useEffect, useState} from "react";
import {Item, ItemImage, ItemIMG, ItemTitle, MovieListItem} from "./MovieItem.Styled";
import {Link} from "react-router-dom";
import common from "../../../utils";

function MovieItem(props) {
    const {
        item
    } = props;

    const [movieList, setMovieList] = useState({});

    useEffect(() => {
        const result = common.Sort.descending(item, "rating");
        setMovieList(result);
    }, [item]);

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