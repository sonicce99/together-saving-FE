import React from "react";
import styled from "styled-components";
import SendImage from "../../images/Send.png";

const SavingCommunication = () => {
  return (
    <Container>
      <Inner>
        소통
        <Div>
          <Input placeholder="메세지 입력" />
          <Img src={SendImage} />
        </Div>
      </Inner>
    </Container>
  );
};

const Container = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  border: 2px solid black;
`;

const Inner = styled.div`
  width: 343px;
  margin: ${({ theme }) => theme.margins.marginCenter};
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  width: 343px;
  height: 48px;
  background: ${({ theme }) => theme.colors.colorLightGray2};
  border-radius: 6px;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  right: 16px;
`;

export default SavingCommunication;
