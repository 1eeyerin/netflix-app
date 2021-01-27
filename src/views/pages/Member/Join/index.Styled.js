import styled from "styled-components";
import {Form} from "antd";


export const JoinGroup = styled.div`
  max-width: 600px;
  margin: 60px auto;
  h2{
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    margin-bottom: 10px;
    font-weight: 500;
    letter-spacing: -.2px;
  }
`
export const FormStyled = styled(Form)`
  .ant-form-item-label > label {
    color: #fff;
  }
  .ant-form-item {
    margin: 12px 0 0px;
  }
`
export const FormErrorMessage = styled.div`
  color: ${(props) => props.theme.mainColor};
  margin-top: 2px;
`