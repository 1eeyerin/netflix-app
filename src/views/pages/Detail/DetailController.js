import React, {useState, useEffect} from "react";
import {userActions} from "../../../redux/actionCreators";
import utils from "../../../utils";

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
        //<myList>에 있는 게시글인지 체크, otherPost 생성 및 sorting
        const likedListResult = post && Boolean(myList.find((item) => item === post.id));

        const genreArr = post.genres;
        const otherPostResult = genreArr && Movies.filter((item) => {
            for(let i=0; i<genreArr.length; i++){
                if(item.genres.indexOf(genreArr[i]) !== -1 && post.id !== item.id) return true;
            }
        });
        const result = utils({name:"descending", item: otherPostResult, target:"rating"});

        setIsLiked(likedListResult);
        setOtherPost(result);
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