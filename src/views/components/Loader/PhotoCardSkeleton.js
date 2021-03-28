import React from "react";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";

function PhotoCardSkeleton() {

  return (
    <Container>
      <Photo>
        <Thumb/>
      </Photo>
      <Text/>
    </Container>
  )
}

const Container = styled.div`
  display: inline-block;
  vertical-align: top;
  width: 185px;
  margin: 4px;
`

const Photo = styled.div`
  height: 0;
  display: block;
  padding-bottom: 150%;
  position: relative;
`

const Thumb = styled(Skeleton)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`
const Text = styled(Skeleton)`
  margin-top: 10px;
`


export default PhotoCardSkeleton;