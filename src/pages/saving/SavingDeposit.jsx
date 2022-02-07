import React from "react";
import styled from "styled-components";
import SavingRoomInfoContainer from "./SavingRoomInfoContainer";
import DivisionLine from "../../components/DivisionLine";
import DepositView from "../../views/deposit/DepositView";
import Time from "../../components/Time";
import Header from "../../components/Header";
import { useMatch } from "react-router-dom";

const SavingDeposit = () => {
  const {
    params: { id },
  } = useMatch("/saving/:id/deposit");

  return (
    <DepositContainer>
      <Time />
      <Header sub />
      <SavingRoomInfoContainer id={id} />
      <DivisionLine />
      <DepositView />
    </DepositContainer>
  );
};

const DepositContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default SavingDeposit;
