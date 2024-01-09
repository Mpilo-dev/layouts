import * as React from "react";
import styled from "styled-components";

const LayoutFive = () => {
    return (
      <Container>
        <Item/>
      </Container>
    );
  };
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: green;
    box-sizing: border-box;
  
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Item = styled.div`
    width: 160px;
    height: 160px;
    border-radius: 100%;
    background-color: blue;
  `;

export default LayoutFive;