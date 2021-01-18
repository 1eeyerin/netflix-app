import {bindActionCreators} from "redux";
import store from "./store";
import {Action as AppAction} from "./app/redux";
import {Action as UserAction} from "./user/redux";

const {
    dispatch
} = store;

export const appActions = bindActionCreators(AppAction.Creators, dispatch);
export const userActions = bindActionCreators(UserAction.Creators, dispatch);