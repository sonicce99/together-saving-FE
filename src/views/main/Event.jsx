import React from "react";
import styled from "styled-components";

const Event = () => {
  return <Container>이벤트</Container>;
};

const Container = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 307px;
  border: 2px solid black;
`;

export default Event;
