import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
`
export const MovieListItem = styled.div`
  width: 120px;
  + div {
    margin-left: 10px;
  }
`
export const ItemImage = styled.div`
  height: 150px;
  background: #aaaaaa;
  overflow: hidden;
  position: relative;
`

export const ItemIMG = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`

export const ItemTitle = styled.h3`
  margin-top: 5px;
  font-size: 14px;
`