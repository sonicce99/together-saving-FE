import React from "react";
import styled from "styled-components";
import removeArrow from "../../images/remove_arrow.png";

const NUMBER_KEYPAD = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "00", "0"];

const DepositKeypad = ({ inputPrice, onHandleInput }) => {
  const handleInputPrice = (e) => {
    onHandleInput((inputPrice + e.target.value).replace(/(^0+)/, ""));
  };

  const handleRemovePriceButton = () => {
    onHandleInput(String(inputPrice).slice(0, -1));
  };

  return (
    <KeypadContainer>
      {NUMBER_KEYPAD.map((numbers, index) => (
        <Number
          key={index}
          value={index > 8 ? numbers : index + 1}
          onClick={handleInputPrice}
        >
          {numbers}
        </Number>
      ))}
      <Number onClick={handleRemovePriceButton}>
        <Image src={removeArrow} alt="remove" />
      </Number>
    </KeypadContainer>
  );
};

const KeypadContainer = styled.div`
  width: 375px;
  height: 214px;
  padding: 3px 6px 5px;
  position: fixed;
  bottom: 94px;
  border-top: 1px solid ${({ theme }) => theme.colors.colorLightGray4};
  display: flex;
  flex-wrap: wrap;
`;

const Number = styled.button`
  width: 121px;
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.colorDarkGray1};
  font-size: 24px;
  font-weight: 400;
`;

const Image = styled.img`
  width: 21px;
  height: 21px;
`;

export default DepositKeypad;
