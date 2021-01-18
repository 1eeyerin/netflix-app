import React from "react";
import styled from "styled-components";

function MovieItem() {
    return (
        <Item>
            <MovieListItem>
                <ItemImage></ItemImage>
                <ItemTitle>테스트</ItemTitle>
            </MovieListItem>
            <MovieListItem>
                <ItemImage></ItemImage>
                <ItemTitle>테스트</ItemTitle>
            </MovieListItem>
            <MovieListItem>
                <ItemImage></ItemImage>
                <ItemTitle>테스트</ItemTitle>
            </MovieListItem>
            <MovieListItem>
                <ItemImage></ItemImage>
                <ItemTitle>테스트</ItemTitle>
            </MovieListItem>
            <MovieListItem>
                <ItemImage></ItemImage>
                <ItemTitle>테스트</ItemTitle>
            </MovieListItem>
        </Item>
    )
}
const Item = styled.div`
  display: flex;
  margin-top: 10px;
`
const MovieListItem = styled.div`
  width: 250px;
  + div {
    margin-left: 10px;
  }
`
const ItemImage = styled.div`
  height: 120px;
  background: #aaaaaa;
`
const ItemTitle = styled.h3`
  color: inherit;
  margin-top: 5px;
  font-size: 14px;
`

export default MovieItem;