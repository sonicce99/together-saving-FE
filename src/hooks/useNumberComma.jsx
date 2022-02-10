import React from "react";

const useNumberComma = (number) => {
  const numberRegex = number.toString().split(".");
  numberRegex[0] = numberRegex[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return numberRegex.join(".");
};

export default useNumberComma;
