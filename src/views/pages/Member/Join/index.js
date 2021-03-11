import React from "react";
import {Form} from 'antd';
import {userActions} from "../../../../redux/actionCreators";
import {guid} from "../../../../utils/common";
import JoinForm from "./JoinForm";
import {useSelector} from "react-redux";
import SubmitController from "./SubmitController";


function Join({history}) {
    const {
        isLoggedIn = false
    } = useSelector(state => state.user);

    const [form] = Form.useForm();
    const required = {id : true, password : true, verifyPassword : true, nickname : true};

    const storeDispatch = (obj) => userActions.addedUser(obj);
    const buildDispatch = (arg) => ({
        id : guid(),
        userId : arg.id,
        userPassword : arg.password,
        nickname : arg.nickname,
        myList: [],
        SearchList: [],
    });

    const [user, error, handleSubmit, handleOnChange] = SubmitController({
        form, required, isLoggedIn, history,
        storeDispatch, buildDispatch
    });


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