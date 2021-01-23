import React, {useEffect} from "react";
import AppLayout from "./views/components/AppLayout";
import { Switch, Route } from "react-router-dom";
import Home from "./views/pages/Home";
import Detail from "./views/pages/Detail";
import Genre from "./views/pages/Genre";
import MyList from "./views/pages/MyList";
import Search from "./views/pages/Search";
import {useSelector} from "react-redux";
import {appActions} from "./redux/actionCreators";

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
                    <Route path={"/my-list"} component={MyList}/>
                    <Route path={"/Search"} component={Search}/>
                </Switch>
            </AppLayout>
        </>
    )
}

export default App;