import React from "react";
import styled from "styled-components";
import Circle from "../../images/Circle.png";
import { BsArrowRight } from "react-icons/bs";

const ChallengeCreateAndEct = ({ setValue }) => {
  return (
    <Container>
      <Div>
        <Content onClick={() => setValue(1)}>
          <Title>저축 챌린지 직접 개설도 가능해요!</Title>
          <Div2>
            <Title2>개설하기</Title2>
            <Image src={Circle} />
            <BsArrowRight
              style={{
                position: "absolute",
                right: "6px",
              }}
              color="#3178FF"
              size="20px"
            />
          </Div2>
        </Content>
        <Content orange>
          <Title>아쉽게 놓친 챌린지 궁금하신가요?</Title>
          <Div2>
            <Title2>바로가기</Title2>
            <Image src={Circle} />
            <BsArrowRight
              style={{
                position: "absolute",
                right: "6px",
              }}
              color="#EEAF3E"
              size="20px"
            />
          </Div2>
        </Content>
        <Content sky>
          <Title>내가 찜한 챌린지들을 보러 가요!</Title>
          <Div2>
            <Title2>바로가기</Title2>
            <Image src={Circle} />
            <BsArrowRight
              style={{
                position: "absolute",
                right: "6px",
              }}
              color="#8FC9FF"
              size="20px"
            />
          </Div2>
        </Content>
      </Div>
    </Container>
  );
};

const Container = styled.div`
  height: 160px;
  margin-bottom: 90px;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  overflow-x: scroll;
  -ms-overflow-style: none; /* IE, Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
`;

const Content = styled.div`
  width: 160px;
  height: 160px;
  margin-right: 10px;
  background: ${(props) =>
    props.orange ? "#EEAF3E" : props.sky ? "#8FC9FF" : "#3178FF"};
  border-radius: 6px;
  padding: 16px 12px 54px 16px;
  cursor: pointer;
`;

const Div2 = styled.div`
  display: flex;
  align-items: center;
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
