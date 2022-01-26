import React, { useEffect } from "react";
import SavingStatusInfo from "../../views/saving/SavingStatusInfo";
import { useSelector, useDispatch } from "react-redux";
import { getSavingInfo } from "../../redux/reducers/savingInfoReducer";

const SavingStatusContainer = () => {
  const statusInfo = useSelector((state) => state.savingInfoReducer.savingInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSavingInfo());
  }, [dispatch]);

  if (statusInfo.loading) return <div>로딩중</div>;
  if (statusInfo.error) return <div>에러 발생</div>;
  if (!statusInfo.data) return null;

  return <SavingStatusInfo savingStatus={statusInfo.data} />;
};

export default SavingStatusContainer;
