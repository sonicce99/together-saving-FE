import React, { useEffect } from "react";
import SavingHistory from "../../views/saving/SavingHistory";
import { useSelector, useDispatch } from "react-redux";
import { getSavingHistory } from "../../redux/reducers/savingHistoryReducer";

const SavingHistoryContainer = ({ id }) => {
  const history = useSelector(
    (state) => state.savingHistoryReducer.savingHistory
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavingHistory(id));
  }, [dispatch]);

  console.log(history.data);

  if (history.loading) return <div>로딩중</div>;
  if (history.error) return <div>에러 발생</div>;
  if (!history.data) return null;

  return <SavingHistory savingHistory={history.data} id={id} />;
};

export default SavingHistoryContainer;
