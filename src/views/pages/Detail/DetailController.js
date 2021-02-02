import React, {useState, useEffect} from "react";
import {userActions} from "../../../redux/actionCreators";

function DetailController(id, Movies, myList){
    const [isLiked, setIsLiked] = useState(false);
    const [post, setPost] = useState({});
    const [otherPost, setOtherPost] = useState({});

    useEffect(() => {
        //post 정의
        const postResult = Movies.length && Movies.find((i) => id === i.id);
        setPost(postResult);
    }, [Movies, id]);


    useEffect(() => {
        //추천 post 생성, <myList>에 있는 게시글인지 체크
        const genreArr = post.genres;
        const otherPostResult = genreArr && Movies.filter((item) => {
            for(let i=0; i<genreArr.length; i++){
                if(item.genres.indexOf(genreArr[i]) !== -1 && post.id !== item.id) return true;
            }
        });
        const likedListResult = post && Boolean(myList.find((item) => item === post.id));

        setOtherPost(otherPostResult);
        setIsLiked(likedListResult);
    }, [post]);


    const toggleLikeButton = (state) => {
        //보관함 토글 버튼
        setIsLiked(!state);
        if(myList.includes(post.id)){
            userActions.removeMyList(post.id);
        } else {
            userActions.addMyList(post.id);
        }
    };

    return [post, otherPost, isLiked, toggleLikeButton];
}

export default DetailController;