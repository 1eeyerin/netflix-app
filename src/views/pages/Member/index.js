import React from "react";
import {Route, Switch} from "react-router-dom";
import Login from "./Login";
import MyList from "./MyList";
import Join from "./Join";
import Profile from "./Profile";

function Member() {

    return (
        <Switch>
            <Route path={"/member/login"} component={Login}/>
            <Route path={"/member/join"} component={Join}/>
            <Route path={"/member/my-list"} component={MyList}/>
            <Route path={"/member/profile"} component={Profile}/>
        </Switch>
    )
}


export default Member;