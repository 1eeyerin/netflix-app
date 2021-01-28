import React, {useState, useEffect} from "react";
import {Form, Button, Input} from 'antd';
import {FormErrorMessage, FormStyled, JoinGroup} from "./index.Styled";
import useForm from "../../../../hooks/useForm";


function Join() {

    const [userInfo, setUserInfo] = useState({});
    const [infoError, setInfoError] = useState({});
    const [onChange, handleSubmit] = useForm(userInfo, setUserInfo, infoError, setInfoError);

    useEffect(() => {

        console.log('@@ error',infoError);

    }, [userInfo, infoError]);

    return (
        <JoinGroup>
            <h2>Member Join</h2>
            <FormStyled onFinish={(e) => handleSubmit(e)}>
                <Form.Item name="username">
                    <Input
                        placeholder="Username"
                        value={userInfo.id}
                        name="id"
                        onChange={(e) => onChange(e)}
                    />
                </Form.Item>
                {infoError.id && <FormErrorMessage>{infoError.id}</FormErrorMessage>}

                <Form.Item name="password">
                    <Input.Password
                        placeholder="Password"
                        type="password"
                        value={userInfo.password}
                        name="password"
                        onChange={(e) => onChange(e)}
                    />
                </Form.Item>

                {infoError.password && <FormErrorMessage>{infoError.password}</FormErrorMessage>}

                <Form.Item name="verifyPassword">
                    <Input.Password
                        placeholder="Verify Password"
                        type="password"
                        value={userInfo.verifyPassword}
                        name="verifyPassword"
                        onChange={(e) => onChange(e)}
                    />
                </Form.Item>
                {infoError.verifyPassword && <FormErrorMessage>{infoError.verifyPassword}</FormErrorMessage>}

                <Form.Item name="nickname">
                    <Input
                        placeholder="User Nickname"
                        value={userInfo.nickname}
                        name="nickname"
                        onChange={(e) => onChange(e)}
                    />
                </Form.Item>
                {infoError.nickname && <FormErrorMessage>{infoError.nickname}</FormErrorMessage>}
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