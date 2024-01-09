import * as React from "react";
import styled from "styled-components";

const LayoutSix = () => {
  return (
    <Container>
      <Item/>
      <Item/>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: green;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: 20px;
`;
const Item = styled.div`
  width: 100%;
  height: 140px;
  background-color: blue;
`;

export default LayoutSix;