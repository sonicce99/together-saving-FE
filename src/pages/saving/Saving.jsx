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

const Saving = () => {
  const { loading, data, error } = useSelector(
    (state) => state.savingInfoReducer.savingInfo
  );

  const ChallengeData = useSelector(
    (state) => state.challengeSummaryReducer.challengeSummaryInfo
  );

  // const { data1, loading1, error1 } = useSelector(
  //   (state) => state.savingHistoryReducer.savingHistory
  // );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavingInfo());
  }, [dispatch]);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>에러 발생</div>;
  if (!data) return null;

  return (
    <SavingContainer>
      <Link to="/challenge/:id">
        <SavingRoomInfo summaryData={ChallengeData.data.data} />
      </Link>
      <DivisionLine />
      <SavingMenuButton />
      <SavingTotalAmount savingInfo={data} />
      <DivisionLine />
      <SavingAccount />
      <SavingStartButton />
    </SavingContainer>
  );
};

const SavingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Saving;
