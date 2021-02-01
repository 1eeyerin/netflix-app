import {useEffect} from "react";
import {useSelector} from "react-redux";
import {userActions} from "../../../../redux/actionCreators";

function Logout({history}){
    const {
        isLoggedIn = false
    } = useSelector(state => state.user);

    useEffect(() => {
        if(isLoggedIn) {
            userActions.updateState({
                LoginData: {},
                isLoggedIn: false,
            });
            alert('로그아웃 되었습니다.');
            history.push("/");
            return false;
        } else {
            alert('정상적인 경로가 아닙니다.');
            history.push("/");
            return false;
        }
    }, [isLoggedIn]);

    return null;
}

export default Logout;