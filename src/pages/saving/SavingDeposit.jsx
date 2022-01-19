import React from "react";
import styled from "styled-components";
import DivisionLine from "../../components/DivisionLine";
import DepositView from "../../views/deposit/DepositView";
import SavingRoomInfo from "../../views/saving/SavingRoomInfo";

const SavingDeposit = () => {
  return (
    <DepositContainer>
      <SavingRoomInfo />
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
