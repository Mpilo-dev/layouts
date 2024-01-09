import * as React from "react";
import styled from "styled-components";

const LayoutOne = () => {
  return (
    <Container>
      <Item/>
      <Item/>
      <Item/>
    </Container>
  );
};
const Container = styled.div`
/* How does margin and padding function  */
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: green;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
const Item = styled.div`
  /* width: 100%; */
/* Does flex account for width and height */
  flex: 1;
  background-color: red;
`;

export default LayoutOne;