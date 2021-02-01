import React from "react";
import {Route, Switch} from "react-router-dom";
import Login from "./Login";
import MyList from "./MyList";
import Join from "./Join";
import Profile from "./Profile";
import Logout from "./Logout";

function Member({history}) {

    return (
        <Switch>
            <Route path={"/member/login"} component={Login}/>
            <Route path={"/member/join"} component={Join} history={history}/>
            <Route path={"/member/logout"} component={Logout} history={history}/>
            <Route path={"/member/my-list"} component={MyList}/>
            <Route path={"/member/profile"} component={Profile}/>
        </Switch>
    )
}


export default Member;