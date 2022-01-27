import React from "react";
import styled from "styled-components";
import Circle from "../../images/Circle.png";
import { BsArrowRight } from "react-icons/bs";

const ChallengeCreateAndEct = () => {
  return (
    <Container>
      <Div>
        <Content>
          <Title>저축 챌린지 직접 개설도 가능해요!</Title>
          <Div2>
            <Title2>개설하기</Title2>
            <Image src={Circle} />
            <BsArrowRight
              style={{
                position: "absolute",
                right: "20px",
              }}
              color="#000000"
            />
          </Div2>
        </Content>
        <Content>
          <Title>아쉽게 놓친 챌린지 궁금하신가요?</Title>
        </Content>
        <Content></Content>
        <Content></Content>
        <Content></Content>
      </Div>
    </Container>
  );
};

const Container = styled.div`
  height: 160px;
  border: 2px solid black;
  margin-bottom: 34px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
`;

const Content = styled.div`
  width: 160px;
  height: 160px;
  margin-right: 10px;
  background: ${({ theme }) => theme.colors.colorBlue2};
  border-radius: 6px;
  border: 2px solid red;
  padding: 16px 12px 54px 16px;
`;

const Div2 = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid yellow;
  position: relative;
`;

const Title = styled.div`
  width: 123px;
  height: 46px;
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  font-size: 16px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.colorLightGray2};
  margin-bottom: 54px;
`;

const Title2 = styled(Title)`
  width: 52px;
  height: 20px;
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  font-size: 14px;
  line-height: 20px;
  margin: 0 8px 0 35px;
`;

const Image = styled.img`
  width: 32px;
  height: 32px;
`;

export default ChallengeCreateAndEct;
