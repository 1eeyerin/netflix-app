import React from "react";
import {Form, Input, Button} from "antd";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import {Container, FormStyled, LoginGroup} from "./index.Styled";
import {Link} from "react-router-dom";

function LoginForm(props) {
    const {
        form, handleSubmit, background
    } = props;

    return (
        <Container background={background}>
            <LoginGroup>
                <h2>Member Login</h2>
                <FormStyled
                    name="normal_login"
                    className="login-form"
                    form={form}
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        name="username"
                        className="user-name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-btn">
                            Log in
                        </Button>
                        or <Link to={"/member/join"} className="login-form-link">register now!</Link>
                    </Form.Item>
                </FormStyled>
            </LoginGroup>
        </Container>
    )
}


export default LoginForm;