import * as React from "react";
import styled from "styled-components";

const LayoutNine = () => {
  return (
    <Container>
      <Item />
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: green;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const Item = styled.div`
  width: 200px;
  height: 50%;
  background-color: blue;
`;

export default LayoutNine;