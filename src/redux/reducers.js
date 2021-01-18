import {combineReducers} from "redux";
import {reducer as appReducer} from "./app/redux";
import {reducer as userReducer} from "./app/redux";

const reducers = combineReducers({
    app: appReducer,
    user: userReducer
})

export default reducers;