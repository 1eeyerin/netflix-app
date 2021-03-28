import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

function PhotoCardSkeleton() {

  return (
    <Container>
      <Thumb/>
    </Container>
  )
}

const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 185px;
  margin: 4px;

  > span {
    height: 0;
    display: block;
    padding-bottom: 150%;
    position: relative;
  }
`
const Thumb = styled(Skeleton)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`


export default PhotoCardSkeleton;