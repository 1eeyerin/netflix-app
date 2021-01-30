import {all} from "redux-saga/effects";
import appSaga from "./app/saga";
import userSaga from "./user/saga";

function* sagas (){
    yield all([
        appSaga(),
        userSaga(),
    ])
}

export default sagas;