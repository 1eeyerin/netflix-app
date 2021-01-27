import styled from "styled-components";
import {MainArea} from "../../components/AppLayout/AppLayout.Styled";

export const DetailGroup = styled.div`
  position: relative;
  min-height: 100vh;
  background: #202020 ${(props) => props.background && `url(${props.background})`} no-repeat center top /cover fixed;
  transition: background-image 0.5s .1s;
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
export const MainAreaStyled = styled(MainArea)`
    z-index: 2;
`