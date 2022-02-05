// 문자열로 넘어오는 금액에 천단위 콤마를 붙이는 정규식
export const numberRegexWithComma = (number) => {
  const numberRegex = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return numberRegex;
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

export const showMoreTitle = (challengeName) => {
  switch (challengeName) {
    case "participate":
      const join = "참여중인 챌린지";
      return join;
    case "popular":
      const popluar = "인기 챌린지";
      return popluar;
    case "deadline":
      const deadline = "마감 임박 챌린지";
      return deadline;
    case "all":
      const all = "전체 챌린지";
      return all;
    default:
      throw Error;
  }
};

// 챌린지 정보 날짜
export const challengeDayKor = (day) => {
  switch (day) {
    case "MON":
      return "월";
    case "TUE":
      return "화";
    case "WED":
      return "수";
    case "THU":
      return "목";
    case "FRI":
      return "금";
    case "SAT":
      return "토";
    case "SUN":
      return "일";
    default:
      throw Error;
  }
};

// 필터링 날짜
export const periodKor = (period) => {
  switch (period) {
    case "today":
      return "당일";
    case "1week":
      return "1주일";
    case "1month":
      return "1개월";
    case "3month":
      return "3개월";
    default:
      throw Error;
  }
};

// 정렬 날짜
export const orderKor = (order) => {
  switch (order) {
    case "desc":
      return "최근저축순";
    case "asc":
      return "과거저축순";
    default:
      throw Error;
  }
};
