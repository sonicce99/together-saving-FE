import React, { useState } from "react";
import styled from "styled-components";
import removeArrow from "../../images/remove_arrow.png";

const DepositKeypad = ({ inputPrice, onHandleInput }) => {
  const handleInputPrice = (e) => {
    onHandleInput((inputPrice + e.target.value).replace(/(^0+)/, ""));
  };

  const handleRemovePrice = () => {
    onHandleInput(inputPrice.slice(0, -1));
  };

  return (
    <KeypadContainer>
      <KeypadLine>
        <Number value="1" onClick={handleInputPrice}>
          1
        </Number>
        <Number value="2" onClick={handleInputPrice}>
          2
        </Number>
        <Number value="3" onClick={handleInputPrice}>
          3
        </Number>
      </KeypadLine>
      <KeypadLine>
        <Number value="4" onClick={handleInputPrice}>
          4
        </Number>
        <Number value="5" onClick={handleInputPrice}>
          5
        </Number>
        <Number value="6" onClick={handleInputPrice}>
          6
        </Number>
      </KeypadLine>
      <KeypadLine>
        <Number value="7" onClick={handleInputPrice}>
          7
        </Number>
        <Number value="8" onClick={handleInputPrice}>
          8
        </Number>
        <Number value="9" onClick={handleInputPrice}>
          9
        </Number>
      </KeypadLine>
      <KeypadLine>
        <Number value="00" onClick={handleInputPrice}>
          00
        </Number>
        <Number value="0" onClick={handleInputPrice}>
          0
        </Number>
        <Number onClick={handleRemovePrice}>
          <Image src={removeArrow} alt="remove" />
        </Number>
      </KeypadLine>
    </KeypadContainer>
  );
};

const KeypadContainer = styled.div`
  height: 214px;
  padding: 3px 6px 5px;
  position: absolute;
  bottom: 94px;
  border-top: 1px solid ${({ theme }) => theme.colors.colorLightGray4};
`;

const KeypadLine = styled.div`
  height: 52px;
  display: flex;
`;

const Number = styled.button`
  width: 121px;
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
