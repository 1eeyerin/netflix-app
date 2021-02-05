import React from "react";
import MovieList from "../../components/MovieList";
import {MainArea} from "../../components/AppLayout/AppLayout.Styled";

function MainList(props){
    const {
        MovieListFilter = {},
        isLoggedIn,
        nickname = "",
        myList,
        settings
    } = props;

    return(
        <MainArea>
            <MovieList
                settings={settings}
                itemlistTitle={"인기 추천 컨텐츠"}
                item={MovieListFilter({el:"recommend", sorting:false})}/>
            {
                isLoggedIn && Boolean(myList.length) && (
                    <MovieList
                        settings={settings}
                        itemlistTitle={`${nickname}님이 좋아하는 컨텐츠`}
                        item={MovieListFilter({el:"myList", sorting:false})}/>
                )
            }
            <MovieList
                itemlistTitle={"드라마"}
                settings={settings}
                item={MovieListFilter({el:"genres", val:"Drama"})}/>
            <MovieList
                itemlistTitle={"코미디 영화"}
                settings={settings}
                item={MovieListFilter({el:"genres", val:"Comedy"})}/>
        </MainArea>
    )
}


export default MainList;