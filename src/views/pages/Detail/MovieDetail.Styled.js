import styled from "styled-components";
import {RiHeartAddLine} from "react-icons/ri";

export const MovieInfo = styled.div`
`
export const ItemGroup = styled.div`
  display: flex;

  @media ${(props) => props.theme.mobile} {
    flex-wrap: wrap;
  }
`
export const ColLeft = styled.div`
`
export const PosterImage = styled.div`
`
export const PosterIMG = styled.img`
  width: 250px;

  @media ${(props) => props.theme.mobile} {
    width: 180px;
  }
`
export const ColRight = styled.div`
  box-sizing: border-box;
  padding: 0 50px;
  font-size: 14px;
  width: calc(100% - 250px);

  @media ${(props) => props.theme.mobile} {
    width: 100%;
    padding: 20px 0;
  }
`
export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  letter-spacing: -.3px;
`
export const Year = styled.div`
    margin: 15px 0px 0px;
`
export const Rating = styled.div`
    margin-bottom: 20px;
`
export const Runtime = styled.div`
    opacity: 0.5;
`
export const Description = styled.div`
  font-size: 15px;
  margin: 20px 0 25px;
  max-width: 600px;
  line-height: 1.6;
  opacity: 0.7;
`
export const Genre = styled.div`
    opacity: 0.5;
`
export const Genres = styled.span`
  + span {
    margin-left: 5px;
  }
`
export const OtherMovies = styled.div`
  overflow:hidden;
  margin-top: 50px;
  background: rgba(0,0,0,0.5);
  padding: 35px 25px;
  box-sizing: border-box;
  h3 {
    margin-bottom: 10px;
  }
`
export const OtherMovieList = styled.div`
`
export const LikeButton = styled.button`
  font-size: 15px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  transition: .4s;

  span {
    margin-left: 8px;
  }

  &:not(.active):hover {
    opacity: 0.5;
  }

  svg {
    animation: bounceHeart 1s 2 ease-out;
  }
  &.active {
    color: #34b56b;
  }
`
export const HeartIcon = styled(RiHeartAddLine)`
  font-size: 20px;
  transition: animation .4s;
  @keyframes bounceHeart {
    0% {transform: translateY(0px)}
    50% {transform: translateY(-3px)}
    100% {transform: translateY(0px)}
  }
`