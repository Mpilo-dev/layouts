import * as React from "react";
import styled from "styled-components";

const LayoutEight = () => {
  return (
    <Container>
      <ItemOne/>
      <ItemTwo/>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: green;

  display: flex;
  flex-direction: column;
`;
const ItemOne = styled.div`
  width: 200px;
  height: 50%;
  background: red;

  align-self: flex-start;
`;
const ItemTwo = styled.div`
  width: 200px;
  height: 50%;
  background: red;

  align-self: flex-end;
`;

export default LayoutEight;