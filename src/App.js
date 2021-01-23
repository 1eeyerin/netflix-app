import React, {useEffect} from "react";
import AppLayout from "./views/components/AppLayout";
import { Switch, Route } from "react-router-dom";
import Home from "./views/pages/Home";
import Detail from "./views/pages/Detail";
import Genre from "./views/pages/Genre";
import MyList from "./views/pages/Member/MyList";
import Search from "./views/pages/Search";
import {useSelector} from "react-redux";
import {appActions} from "./redux/actionCreators";
import Member from "./views/pages/Member";

function App(){

    const {
        movie = []
    } = useSelector(state => state?.app);

    useEffect(() => {
        if(!movie.length) {
            console.log('@@APP/GET_MOVIES');
            appActions.getMovies();
        }
    }, []);


    return(
        <>
            <AppLayout>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route path={"/detail/:id"} component={Detail}/>
                    <Route path={"/genre"} component={Genre}/>
                    <Route path={"/search"} component={Search}/>
                    <Route exact path={"/member"} component={Member}/>
                </Switch>
            </AppLayout>
        </>
    )
}

export default App;