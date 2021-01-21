import styled from "styled-components";

export const MovieInfo = styled.div`
`
export const ItemGroup = styled.div`
  display: flex;
  
  @media ${(props) => props.theme.tablet} {
    flex-wrap: wrap;
  }
`
export const ItemImage = styled.div`
`
export const ItemIMG = styled.img`
  width: 250px;
`
export const ItemInfo = styled.div`
  box-sizing: border-box;
  padding: 0 50px;

  @media ${(props) => props.theme.tablet} {
    width: 100%;
  }
`
export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: inherit;
  font-size: 32px;
  letter-spacing: -.3px;
`
export const Rating = styled.div`
`
export const Runtime = styled.div`
`
export const Description = styled.div`
  font-size: 13px;
  max-width: 600px;
`
export const Genre = styled.div`
`
export const Genres = styled.span`
    + span {
      margin-left: 5px;
    }
`