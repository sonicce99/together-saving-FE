import React from "react";
import MoreShowList from "../../views/more/MoreShowList";
import BottomNav from "../../components/BottomNav";
import Time from "../../components/Time";

const MoreShow = () => {
  return (
    <>
      <Time />
      <MoreShowList />
      <BottomNav />
    </>
  );
};

export default MoreShow;
