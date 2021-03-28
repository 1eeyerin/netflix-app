import React from "react";
import styled from "styled-components";
import _ from "lodash";
import PhotoCardSkeleton from "./PhotoCardSkeleton";

function PhotoListSkeleton() {
  const arr = _.range(15);

  return (
    <Container>
      <Row>
        <Col>
          {arr.map((i) => (
            <PhotoCardSkeleton/>
          ))}
        </Col>
      </Row>
    </Container>
  )
}

const Container = styled.div`
`

const Row = styled.div`
`

const Col = styled.div`
  white-space: nowrap;
  margin: 5px -5px 0;
`


export default PhotoListSkeleton;