import {userActions} from "../redux/actionCreators";
import {removeAccessToken, setAccessToken} from "../utils/common";
import {useGoogleLogin, useGoogleLogout} from "react-google-login";
import {useEffect} from "react";

export const useAuth = () => {

    const onSuccess = (res) => {
        userActions.updateState({
            isLoggedIn: true,
            LoginData: {
                id: res.profileObj.googleId,
                nickname: res.profileObj.name,
                myList: [],
            }
        })
        setAccessToken(res.accessToken);
    }

    const onLogoutSuccess = (res) => {
        userActions.updateState({
            LoginData: {},
            isLoggedIn: false,
        })
        removeAccessToken(res.accessToken);
    }

    const onFailure = (err) => {
        console.log('@@ err',err);
    }

    const { signIn, loaded } = useGoogleLogin({
        onSuccess,
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        cookiePolicy: 'single_host_origin',
        isSignedIn: true,
        onFailure,
    })

    const { signOut } = useGoogleLogout({
        onFailure,
        clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
        cookiePolicy: 'single_host_origin',
        onLogoutSuccess
    })

    useEffect(() => {
        userActions.updateState({
            loaded
        })
    }, [loaded])

    return {signIn, signOut}
}