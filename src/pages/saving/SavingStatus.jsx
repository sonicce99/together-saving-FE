import React, { useEffect } from "react";
import DivisionLine from "../../components/DivisionLine";
import SavingTotalAmount from "../../views/saving/SavingTotalAmount";
import SavingAccount from "../../views/saving/SavingAccount";
import { useSelector, useDispatch } from "react-redux";
import { getSavingInfo } from "../../redux/reducers/savingInfoReducer";
import { getSavingHistory } from "../../redux/reducers/savingHistoryReducer";

const SavingStatus = ({ endDate }) => {
  const info = useSelector((state) => state.savingInfoReducer.savingInfo);
  const history = useSelector(
    (state) => state.savingHistoryReducer.savingHistory
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavingInfo());
    dispatch(getSavingHistory());
  }, [dispatch]);

  // 리팩토링 필요
  if (info.loading) return <div>로딩중</div>;
  if (info.error) return <div>에러 발생</div>;
  if (!info.data) return null;

  if (history.loading) return <div>로딩중</div>;
  if (history.error) return <div>에러 발생</div>;
  if (!history.data) return null;

  return (
    <>
      <SavingTotalAmount savingInfo={info.data} endDate={endDate} />
      <DivisionLine />
      <SavingAccount savingHistory={history.data} />
    </>
  );
};

export default SavingStatus;
