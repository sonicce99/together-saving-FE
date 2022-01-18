import React from "react";
import styled from "styled-components";

const SavingCount = () => {
  return (
    <CountContainer>
      <CountInfo>
        <img src="" alt="success" />
        <Info>저축성공</Info>
        <Info>3번</Info>
      </CountInfo>
    </CountContainer>
  );
};

const CountContainer = styled.div`
  background-color: wheat;
`;

const CountInfo = styled.div`
  display: flex;
`;

const Info = styled.p``;

export default SavingCount;
