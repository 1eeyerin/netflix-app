import {useEffect} from "react";
import useForm from "../../../../hooks/useForm";

function SubmitController(props) {
    const {
        form, required, isLoggedIn,
        history, storeDispatch, buildDispatch
    } = props;

    const [
        user, setUser, error, setError,
        handleOnChange, handleSubmit,
        isSuccessIn = false
    ] = useForm(storeDispatch, buildDispatch, required);

    useEffect(() => {
        if(isLoggedIn) {
            alert('이미 가입된 회원입니다.');
            history.push("/");
            return false;
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if(isSuccessIn) {
            //<submit> 성공 후 실행할 목록
            alert('회원가입이 완료되었습니다.');
            setUser({});
            setError({});
            form.resetFields();
            history.push("/member/login");
        }
    }, [isSuccessIn]);


    return [user, error, handleSubmit, handleOnChange];
}

export default SubmitController;
