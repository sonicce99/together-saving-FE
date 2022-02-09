import React from "react";
import styled from "styled-components";
import H3 from "../../components/H3";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import useNumberComma from "../../hooks/useNumberComma";
import { axiosInstance } from "../../utils/TokenApi";

const PayBtn = ({ challenge_entry_fee, id }) => {
  const challengeFee = useNumberComma(challenge_entry_fee);
  let navigate = useNavigate();

  const handlePayment = async () => {
    try {
      // 결제하기 요청
      await axiosInstance.post(`/api/v1/challenges/${id}/payment`);
      navigate(`/challenge/${id}/success`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Inner>
        <Div>
          <Title>결제 금액</Title>
          <PaySum>{challengeFee}원</PaySum>
        </Div>
        <Div2 />
        <Button onClick={() => handlePayment()}>참가비 결제하기</Button>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 151px;
  background-color: white;
  position: fixed;
  bottom: 0;
`;

const Inner = styled.div`
  width: 343px;
  margin: ${({ theme }) => theme.margins.marginCenter};
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px 16px 16px;
`;

const Div2 = styled.div`
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 7px;
`;

const Title = styled(H3)`
  color: ${({ theme }) => theme.colors.colorBlack};
  margin-bottom: 0;
`;

const PaySum = styled(H3)`
  font-size: 22px;
  color: ${({ theme }) => theme.colors.colorBlack};
  margin-bottom: 0;
`;

export default PayBtn;
