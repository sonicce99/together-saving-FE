import React, { useEffect } from "react";
import styled from "styled-components";
import DivisionLine from "../../components/DivisionLine";
import SavingRoomInfo from "../../views/saving/SavingRoomInfo";
import SavingMenuButton from "../../views/saving/SavingMenuButton";
import SavingTotalAmount from "../../views/saving/SavingTotalAmount";
import SavingAccount from "../../views/saving/SavingAccount";
import { Link } from "react-router-dom";
import SavingStartButton from "../../views/saving/SavingStartButton";
import { useSelector, useDispatch } from "react-redux";
import { getSavingInfo } from "../../redux/reducers/savingInfoReducer";
import { getSavingHistory } from "../../redux/reducers/savingHistoryReducer";

const Saving = () => {
  const info = useSelector((state) => state.savingInfoReducer.savingInfo);
  const history = useSelector(
    (state) => state.savingHistoryReducer.savingHistory
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavingInfo());
    dispatch(getSavingHistory());
  }, [dispatch]);

  if (info.loading) return <div>로딩중</div>;
  if (info.error) return <div>에러 발생</div>;
  if (!info.data) return null;

  if (history.loading) return <div>로딩중</div>;
  if (history.error) return <div>에러 발생</div>;
  if (!history.data) return null;

  return (
    <SavingContainer>
      <Link to="/challenge">
        <SavingRoomInfo />
      </Link>
      <DivisionLine />
      <SavingMenuButton />
      <SavingTotalAmount savingInfo={info.data} />
      <DivisionLine />
      <SavingAccount savingHistory={history.data} />
      <SavingStartButton />
    </SavingContainer>
  );
};

const SavingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Saving;
