import React from "react";
import styled from "styled-components";
import Loader from "../Assets/loader.gif";

const Container = styled.section`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

const Loading = () => {
  return (
    <Container>
      <img src={Loader} alt="" />
    </Container>
  );
};

export default Loading;
