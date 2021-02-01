import React, {useEffect, useState} from "react";
import {Form} from "antd";
import {useSelector} from "react-redux";
import LoginForm from "./LoginForm";
import SubmitController from "./SubmitController";


function Login({history}) {
    const [form] = Form.useForm();
    const [background, setBackground] = useState('');
    const {
        app: {Movies = []},
        user: {Users = [], isLoggedIn = false}
    } = useSelector(state => state);

    useEffect(() => {
        const result = Movies.length && Movies[Math.floor(Math.random() * Movies.length)].background_image_original;
        result && setBackground(result);
    }, [Movies]);

    const [handleSubmit] = SubmitController(Users, form, history, isLoggedIn);


    return (
        <LoginForm
            form={form}
            background={background}
            handleSubmit={handleSubmit}
        />
    )
}


export default Login;