import {all, call, put, takeLatest} from "redux-saga/effects";
import {Action} from "./redux";
import API from "../../api";

function* saga(){
    yield all([
        takeLatest(Action.Types.GET_MOVIES, function* (){
            const result = yield call(API.getMovies);
            if(result?.data) {
                yield put(Action.Creators.updateState({
                    Movies: result.data.data.movies
                }))
            }
        }),

    ])
}

export default saga;