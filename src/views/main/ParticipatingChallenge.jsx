import React from "react";
import styled from "styled-components";

const ParticipatingChallenge = () => {
  return (
    <Container>
      <Title>참여중인 챌린지</Title>
    </Container>
  );
};

const Container = styled.div`
  height: 214px;
  margin: 55px 0;
  border: 2px solid black;
`;

const Title = styled.p`
  width: 118px;
  height: 21px;

  font-family: SF Pro Text;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: -0.5px;

  color: ${({ theme }) => theme.colors.colorBlack};
`;

export default ParticipatingChallenge;
