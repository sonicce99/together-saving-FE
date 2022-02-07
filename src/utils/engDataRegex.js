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
