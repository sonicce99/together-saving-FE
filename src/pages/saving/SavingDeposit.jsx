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
    <>
      <Time />
      <Header sub />
      <DepositContainer>
        <SavingRoomInfoContainer id={id} />
        <DivisionLine />
        <DepositView />
      </DepositContainer>
    </>
  );
};

const DepositContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 96px;
`;

export default SavingDeposit;
