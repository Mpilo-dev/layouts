import * as React from "react";
import styled from "styled-components";

const LayoutThree = () => {
  return (
    <Container>
      <ItemOne />
      <ItemTwo />
      <ItemThree />
      <ItemFour />
      <ItemFive />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  background-color: green;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 20px;
`;
const ItemOne = styled.div`
  background-color: blue;
  grid-column: 1/2;
`;
const ItemTwo = styled.div`
  background-color: Yellow;
  grid-column: 2/4;
`;
const ItemThree = styled.div`
  background-color: violet;
  grid-column: 1/3;
`;
const ItemFour = styled.div`
  background-color: red;
  grid-column: 3/4;
`;
const ItemFive = styled.div`
  background-color: brown;
  grid-column: 1/4;
`;

export default LayoutThree;
