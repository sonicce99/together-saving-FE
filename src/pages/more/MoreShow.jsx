import React from "react";
import MoreShowList from "../../views/more/MoreShowList";
import BottomNav from "../../components/BottomNav";
import Time from "../../components/Time";
import Header from "../../components/Header";

const MoreShow = () => {
  return (
    <>
      <Time />
      <Header more />
      <MoreShowList />
      <BottomNav />
    </>
  );
};

export default MoreShow;
