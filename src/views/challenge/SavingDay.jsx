import React from "react";
import styled from "styled-components";
import H3 from "../../components/H3";
import GrayBackground from "../../components/GrayBackground";
import { FaCheckCircle } from "react-icons/fa";

const SavingDay = ({ challenge_frequency }) => {
  const Week = ["월", "화", "수", "목", "금", "토", "일"];
  const SavingDay = challenge_frequency.map((day) => day.day);

  return (
    <Container>
      <H3>저축 요일</H3>
      <Background>
        <Contents>
          <Div>
            {Week.map((day, index) => (
              <Div2 key={index}>
                <Title>{day}</Title>
                <Day>
                  {SavingDay.includes(day) ? (
                    <FaCheckCircle size={22} color="#3178FF" />
                  ) : null}
                </Day>
              </Div2>
            ))}
          </Div>
        </Contents>
      </Background>
    </Container>
  );
};

const Container = styled.div`
  margin: 26px 0 40px 0;
`;

const Background = styled(GrayBackground)`
  width: 343px;
  height: 100px;
  margin-bottom: 0;
`;

const Contents = styled.div`
  padding: 20px 17px 0 17px;
`;

const Div = styled.div`
  display: flex;
  justify-content: space-between;
  width: 309px;
  height: 60px;
  margin-bottom: 16px;
`;

const Day = styled.div`
  width: 23px;
  margin: ${({ theme }) => theme.margins.marginCenter};
`;

const Title = styled.div`
  font-size: 13px;
  color: ${({ theme }) => theme.colors.colorGray3};
  margin-bottom: 16px;
`;

const Div2 = styled(Div)`
  display: unset;
  justify-content: unset;
  margin-bottom: 0;
  text-align: center;
`;
export default SavingDay;
