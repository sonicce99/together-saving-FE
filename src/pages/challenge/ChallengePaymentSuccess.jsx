import React from "react";
import styled from "styled-components";
import Character from "../../images/Character.png";
import Button from "../../components/Button";

const ChallengePaymentSuccess = () => {
  return (
    <Container>
      <Inner>
        <Image src={Character} />
        <Title>참가비 결제가 완료 되었어요!</Title>
        <P>이제 챌린지를 시작해보세요!</P>
      </Inner>
      <Button>확인</Button>
    </Container>
  );
};

const Container = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 812px;
  text-align: center;
  border: 2px solid black;
`;

const Inner = styled.div`
  width: 205px;
  height: 335px;
  margin: ${({ theme }) => theme.margins.marginCenter};
  margin-top: 242px;
  margin-bottom: 150px;
`;

const Image = styled.img`
  margin: ${({ theme }) => theme.margins.marginCenter};
  margin-bottom: 40px;
  width: 150px;
  height: 197px;
`;

const Title = styled.p`
  margin: ${({ theme }) => theme.margins.marginCenter};
  margin-bottom: 20px;
  width: 150px;
  height: 58px;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.colorBlue1};
`;

const P = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.colorGray3};
`;

export default ChallengePaymentSuccess;
