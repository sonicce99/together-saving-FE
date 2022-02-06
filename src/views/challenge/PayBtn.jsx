import React from "react";
import styled from "styled-components";
import H3 from "../../components/H3";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import useNumberComma from "../../hooks/useNumberComma";

const PayBtn = ({ challenge_entry_fee, id }) => {
  const challengeFee = useNumberComma(challenge_entry_fee);
  let navigate = useNavigate();

  return (
    <Container>
      <Inner>
        <Div>
          <Title>결제 금액</Title>
          <PaySum>{challengeFee}원</PaySum>
        </Div>
        <Div2 />
        <Button onClick={() => navigate(`/challenge/${id}/success`)}>
          참가비 결제하기
        </Button>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 151px;
  box-shadow: 0px -2px 5px 1px rgba(0, 0, 0, 0.18);
  /* background: ${({ theme }) => theme.colors.colorWhite}; */
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
