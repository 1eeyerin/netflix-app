import {useCallback, useState} from "react";
import validate from "../utils/validation";

function useForm(storeDispatch, requiredForm) {
    const [user, setUser] = useState({});
    const [error, setError] = useState({});
    const [isSuccessIn, setIsSuccessIn] = useState(false);


    const handleOnChange = useCallback((e) => {
        setIsSuccessIn(false);
        let {name : current, value} = e.target;
        const updateInfo = {...user, [current] : value};
        setUser(updateInfo);

        //현재 입력하는 값이 있기에 <current>로 검사
        const result = validate({current, value, user, error, requiredForm});
        setError(result);

    }, [user, error]);


    const handleSubmit = useCallback(() => {
        setIsSuccessIn(false);

        //현재 입력하는 값이 없기에 기존 데이터 <user>로 검사
        const result = validate({user, error, requiredForm});
        setError(result);

        const resultValue = Object.values(result);
        const checkSubmit = Boolean(resultValue.length) && resultValue.every((i) => i === null);

        if (checkSubmit) {
            storeDispatch({
                Users : [user]
            });
            alert('회원가입이 완료되었습니다.');

            setIsSuccessIn(true);
        }

    }, [user, error]);


    return [user, setUser, error, setError, handleOnChange, handleSubmit, isSuccessIn];
}


export default useForm;