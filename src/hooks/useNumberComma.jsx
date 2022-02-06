import React from "react";

const useNumberComma = (number) => {
  const numberRegex = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return numberRegex;
};

export default useNumberComma;
