import styled from "styled-components";
import {Form} from "antd";

export const Container = styled.div`
  background: #202020 ${(props) => props.background && `url(${props.background})`} no-repeat center top /cover fixed;
  transition: background-image 0.5s .1s;
  height: 100vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
`
export const LoginGroup = styled.div`
  position: relative;
  z-index: 2;
  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: 500;
    letter-spacing: -.2px;
  }
`
export const FormStyled = styled(Form)`
  width: 300px;

  .ant-form-item {
    color: #fff;
  }

  .ant-btn {
    width: 100%;
  }

  .user-name {
    margin-bottom: 12px;
  }

  .login-form-link {
    color: #fff;
    text-decoration: underline;
    font-family: 'Montserrat', sans-serif;
  }
  
`