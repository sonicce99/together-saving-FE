import React from "react";
import styled from "styled-components";
import SavingRoomInfoContainer from "./SavingRoomInfoContainer";
import DivisionLine from "../../components/DivisionLine";
import DepositView from "../../views/deposit/DepositView";

const SavingDeposit = () => {
  return (
    <DepositContainer>
      <SavingRoomInfoContainer />
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
