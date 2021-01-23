import styled from "styled-components";

export const Header = styled.header`
  border-bottom: 1px solid #333;
  background: #121212;
  font-size: 13px;
`
export const HeaderWrap = styled.div`
  height: 50px;
  max-width: 1400px;
  margin: 0 auto;
  width: 93%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin-right: 10px;
    color: #c30000;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    align-items: center;
  }

  ul {
    display: flex;
    align-items: center;
    height: 50px;

    li {
      padding: 0 20px;
    }
  }
`
export const HeaderLeft = styled.div`
  display: flex;
  align-content: center;
`
export const HeaderRight = styled.div`
`
