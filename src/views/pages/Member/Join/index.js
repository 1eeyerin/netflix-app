import React, {useEffect} from "react";
import {Form} from 'antd';
import useForm from "../../../../hooks/useForm";
import {userActions} from "../../../../redux/actionCreators";
import utils from "../../../../utils";
import JoinForm from "./JoinForm";


function Join({history}) {

    const [form] = Form.useForm();
    const required = {id : true, password : true, verifyPassword : true, nickname : true};

    const storeDispatch = (obj) => userActions.addedUser(obj);
    const buildDispatch = (arg) => ({
        id : utils({name:"guid"}),
        userId : arg.id,
        userPassword : arg.password,
        nickname : arg.nickname
    });

    const [
        user, setUser, error, setError,
        handleOnChange, handleSubmit,
        isSuccessIn = false
    ] = useForm(storeDispatch, buildDispatch, required);


    useEffect(() => {
        if(isSuccessIn) {
            //<submit> 성공 후 실행할 목록
            setUser({});
            setError({});
            form.resetFields();
            history.push("/");
        }
    }, [isSuccessIn]);


    return (
        <JoinForm
            form={form}
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            user={user}
            error={error}
        />
    )
}


export default Join;