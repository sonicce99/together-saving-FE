import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../components/Button";
import { useParams } from "react-router-dom";

const SavingStartButton = ({ bank, account, defaultPrice }) => {
  const { id } = useParams();

  return (
    <SavingButtonContainer>
      <Link to={"/saving/deposit"} state={{ bank, account, defaultPrice, id }}>
        <Button>저축하기</Button>
      </Link>
    </SavingButtonContainer>
  );
};

const SavingButtonContainer = styled.div`
  height: 90px;
  padding: 8px 16px 34px;
  box-shadow: 0px 4px 21px -1px rgba(0, 0, 0, 0.18);
`;

export default SavingStartButton;
