import * as React from "react";
import styled from "styled-components";

const LayoutTwo = () => {
  return (
    <Container>
      <ItemOne />
      <ItemTwo />
      <ItemThree />
      <ItemFour />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: green;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;
const ItemOne = styled.div`
  background-color: blue;
  grid-column: 3/4;
`;
const ItemTwo = styled.div`
  background-color: Yellow;
  grid-column: 2/3;
`;
const ItemThree = styled.div`
  background-color: violet;
  grid-column: 1/2;
`;
const ItemFour = styled.div`
  background-color: red;
  grid-column: 2/4;
  grid-row:4/5;
`;

export default LayoutTwo;