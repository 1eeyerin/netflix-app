import React, {useEffect} from "react";
import {Form, Button, Input} from 'antd';
import {FormErrorMessage, FormStyled, JoinGroup} from "./index.Styled";
import useForm from "../../../../hooks/useForm";
import {userActions} from "../../../../redux/actionCreators";


function Join() {

    const [form] = Form.useForm();
    const requiredForm = {id : true, password : true, verifyPassword : true, nickname : true};
    const storeDispatch = (user) => userActions.updateState(user);
    const [
        user, setUser, error, setError,
        handleOnChange, handleSubmit,
        isSuccessIn
    ] = useForm(storeDispatch, requiredForm);

    useEffect(() => {
        if(isSuccessIn) {
            setUser({});
            setError({});

            form.resetFields();
        }
    }, [isSuccessIn]);


    useEffect(()=> {
        console.log('@@ user',user);
        console.log('@@ error',error);
    }, [user, error]);

    return (
        <JoinGroup>
            <h2>Member Join</h2>
            <FormStyled form={form} onFinish={handleSubmit}>
                <Form.Item name="username">
                    <Input
                        placeholder="Username"
                        value={user.id}
                        name="id"
                        onChange={(e) => handleOnChange(e)}
                    />
                </Form.Item>
                {error.id && <FormErrorMessage>{error.id}</FormErrorMessage>}

                <Form.Item name="password">
                    <Input.Password
                        placeholder="Password"
                        type="password"
                        value={user.password}
                        name="password"
                        onChange={(e) => handleOnChange(e)}
                    />
                </Form.Item>

                {error.password && <FormErrorMessage>{error.password}</FormErrorMessage>}

                <Form.Item name="verifyPassword">
                    <Input.Password
                        placeholder="Verify Password"
                        type="password"
                        value={user.verifyPassword}
                        name="verifyPassword"
                        onChange={(e) => handleOnChange(e)}
                    />
                </Form.Item>
                {error.verifyPassword && <FormErrorMessage>{error.verifyPassword}</FormErrorMessage>}

                <Form.Item name="nickname">
                    <Input
                        placeholder="User Nickname"
                        value={user.nickname}
                        name="nickname"
                        onChange={(e) => handleOnChange(e)}
                    />
                </Form.Item>
                {error.nickname && <FormErrorMessage>{error.nickname}</FormErrorMessage>}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Join
                    </Button>
                </Form.Item>
            </FormStyled>
        </JoinGroup>
    )
}


export default Join;