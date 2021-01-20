import React, {useEffect} from "react";
import {appActions} from "../../../redux/actionCreators";
import {useSelector} from "react-redux";
import {Item, ItemImage, ItemIMG, ItemTitle, MovieListItem} from "./movieItem.Styled";
import {Link} from "react-router-dom";

function MovieItem(props) {
    const {
        genres
    } = props;

    useEffect(() => {
        appActions.getMovies();
    }, []);

    const {
        movie = []
    } = useSelector(state => state?.app);

    const item = movie.filter((i) => i.genres.indexOf(genres) !== -1);

    return (
        <Item>
            {
                item.map((i) => {
                    return (
                        <Link to={`/detail/${i.id}`}>
                            <MovieListItem key={i.id}>
                                <ItemImage>
                                    <ItemIMG src={i.large_cover_image} alt={i.title} />
                                </ItemImage>
                                <ItemTitle>{i.title}</ItemTitle>
                            </MovieListItem>
                        </Link>
                    )
                })
            }
        </Item>
    )
}


export default MovieItem;