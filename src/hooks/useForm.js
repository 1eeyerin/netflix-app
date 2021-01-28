import {useCallback} from "react";
import validate from "../utils/validation";

function useForm(user, setUser, error, setError) {

    const handleOnChange = useCallback((e) => {
        let {name : current, value} = e.target;
        const updateInfo = {...user, [current] : value};
        setUser(updateInfo);

        //현재 입력하는 값이 있기에 current로 검사
        const result = validate({current, value, user, error});
        setError(result);

    }, [user, error]);

    const handleSubmit = useCallback((e) => {
        //현재 입력하는 값이 없기에 기존 데이터 user로 검사
        const result = validate({user, error});
        setError(result);

        const errorValue = Object.values(error);
        const checkSubmit = Boolean(errorValue.length) && errorValue.every((i) => i === null);

        console.log('@@ checkSubmit', checkSubmit);
        checkSubmit && console.log('@@ ok');
        
    }, [user, error]);

    return [handleOnChange, handleSubmit];
}


export default useForm;