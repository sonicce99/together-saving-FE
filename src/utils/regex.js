// 문자 관련
export const stringRegexWithComma = (string) => {
  const stringRegex = string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return stringRegex;
};

// 날짜 관련
export const dateRegex = (startDate, endDate) => {
  console.log(startDate, endDate);
};
