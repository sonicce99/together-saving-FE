// 문자열로 넘어오는 금액에 천단위 콤마를 붙이는 정규식
export const stringRegexWithComma = (string) => {
  const stringRegex = string.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return stringRegex;
};

// 챌린지 남은 진행일 수 표시
export const remainDayRegex = (endDate) => {
  const endDay = new Date(endDate);
  const today = new Date();
  const remainTime = endDay.getTime() - today.getTime();
  const remainDay = Math.ceil(remainTime / (1000 * 60 * 60 * 24));

  return remainDay;
};

// 챌린지가 진행되는 n주차 표시 ex) 1주차, 2주차
export const remainWeekRegex = (startDate, endDate) => {
  const weekOfStart = new Date(startDate);
  const weekOfEnd = new Date(endDate);
  const remainTime = weekOfEnd.getTime() - weekOfStart.getTime();
  const remainWeek = Math.ceil(remainTime / (1000 * 60 * 60 * 30 * 5));

  return remainWeek;
};
