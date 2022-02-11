import React from "react";
import styled from "styled-components";
import success_boo from "../../images/success_boo.png";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Time from "../../components/Time";

const SavingSuccess = () => {
  return (
    <>
      <SuccessContainer>
        <Img src={success_boo} alt="success_boo" />
        <MainText>저축에 성공했어요!</MainText>
        <SubText>앞으로 9번의 저축이 남았어요!</SubText>
      </SuccessContainer>
      <SuccessButtonContainer>
        <Link to={"/"}>
          <Button>확인</Button>
        </Link>
      </SuccessButtonContainer>
    </>
  );
};

const SuccessContainer = styled.div`
  padding: 0 52px;
  position: absolute;
  top: 208px;
`;

const Img = styled.img`
  width: 272px;
  height: 187px;
  margin-bottom: 40px;
`;

const Text = styled.p`
  text-align: center;
`;

const MainText = styled(Text)`
  color: ${({ theme }) => theme.colors.colorBlue1};
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const SubText = styled(Text)`
  color: ${({ theme }) => theme.colors.colorGray3};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
`;

const SuccessButtonContainer = styled.div`
  height: 90px;
  padding: 8px 16px 34px;
  position: fixed;
  bottom: 0;
`;

export default SavingSuccess;
