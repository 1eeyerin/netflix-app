import styled from "styled-components";
import Slider from "react-slick";

export const MovieSlider = styled(Slider)`
  margin-top: 10px;
`
export const MovieListItem = styled.div`
  padding: 0 3px;
  box-sizing: border-box;
  &:hover img{
    opacity: 0.4;
  }
`
export const ItemImage = styled.div`
  height: 0;
  overflow: hidden;
  position: relative;
  padding-bottom: 85%;
`

export const ItemIMG = styled.img`
  width: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: .4s;
`

export const ItemTitle = styled.h3`
  margin-top: 5px;
  font-size: 13px;
`