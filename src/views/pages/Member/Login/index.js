import React, {useEffect, useState} from "react";
import {Form} from "antd";
import {useSelector} from "react-redux";
import LoginForm from "./LoginForm";


function Login() {
    const [form] = Form.useForm();
    const [background, setBackground] = useState('');

    const {
        Movies = []
    } = useSelector(state => state.app);

    useEffect(() => {
        const result = Movies.length && Movies[Math.floor(Math.random() * Movies.length)].background_image_original;
        result && setBackground(result);
    }, [Movies]);

    const handleSubmit = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <LoginForm
            form={form}
            handleSubmit={handleSubmit}
            background={background}
        />
    )
}


export default Login;