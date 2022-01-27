import React, { useState } from "react";
import styled from "styled-components";
import finishImage from "../../images/saving_finish.png";
import closeImage from "../../images/popup_close.png";

const SavingFinishPopUp = () => {
  const [close, setClose] = useState(false);

  const handlePopupClose = () => {
    setClose(true);
  };

  return (
    !close && (
      <PopupBackground>
        <PopupContainer>
          <ExitButtonContainer onClick={handlePopupClose}>
            <ButtonImage src={closeImage} alt="close" />
          </ExitButtonContainer>
          <FinishInfoContainer>
            <Image src={finishImage} alt="logo" />
            <Title>저축 챌린지가 끝났어요!</Title>
            <Text>저축금액은 연결된 내 계좌로 자동입금됩니다</Text>
          </FinishInfoContainer>
        </PopupContainer>
      </PopupBackground>
    )
  );
};

const PopupBackground = styled.div`
  width: ${({ theme }) => theme.viewSize.mobile};
  height: 100vh;
  background-color: rgba(76, 76, 76, 0.7);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  width: 287px;
  height: 220px;
  padding: 20px 20px 40px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.colorWhite};
  display: flex;
  flex-direction: column;
`;

const ExitButtonContainer = styled.button`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 6px;
`;

const ButtonImage = styled.img`
  width: 13px;
  height: 13px;
`;

const FinishInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 104px;
  height: 77px;
  margin-bottom: 20px;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.colorBlack};
  font-weight: ${({ theme }) => theme.fontWeights.weightBold};
  font-size: ${({ theme }) => theme.fontSize.fontMideum};
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.colorGray3};
  font-weight: 400;
  font-size: 12px;
`;

export default SavingFinishPopUp;
