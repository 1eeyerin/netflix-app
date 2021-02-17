import {useEffect, useCallback, useState} from "react";
import {userActions} from "../../../../redux/actionCreators";

function SubmitController(Users, form, history, isLoggedIn) {
    const [isSuccessIn, setIsSuccessIn] = useState(false);

    useCallback(() => {
        if (isLoggedIn) {
            alert('이미 로그인된 회원입니다.');
            history.push("/");
            return false;
        }
    }, [isLoggedIn]);

    useEffect(() => {
        if (isSuccessIn) {
            //<submit> 성공 후 실행할 목록
            history.push("/");
            form.resetFields();
            return false;
        }
    }, [isSuccessIn]);


    const handleSubmit = (values) => {
        setIsSuccessIn(false);

        const result = Users.length && Users.find((item) => item.userId === values.userId);

        if (result) {
            if (result.userPassword === values.userPassword) {
                alert('로그인 되었습니다.');
                setIsSuccessIn(true);
                userActions.updateState({
                    isLoggedIn: true,
                    LoginData: {
                        id: result.id,
                        userId: result.userId,
                        nickname: result.nickname,
                        myList: result.myList,
                    }
                })
            } else {
                if (values.userPassword) {
                    alert('비밀번호가 일치하지 않습니다.');
                    return false;
                } else {
                    alert('비밀번호 입력해주세요.');
                    return false;
                }
            }
        } else {
            if (values.userId) {
                alert('일치하는 아이디가 없습니다.');
                return false;
            } else {
                alert('아이디를 입력해주세요.');
                return false;
            }
        }
    }

    return [handleSubmit];
}

export default SubmitController;
