import React from "react";
import styled from "styled-components";

const Keypad = () => {
  return (
    <input
      type="number"
      pattern="[0-9]*"
      placeholder="number"
      inputMode="numeric"
    />
    // <KeypadBox>
    //   <KeypadLine>
    //     <Number>1</Number>
    //     <Number>2</Number>
    //     <Number>3</Number>
    //   </KeypadLine>
    //   <KeypadLine>
    //     <Number>4</Number>
    //     <Number>5</Number>
    //     <Number>6</Number>
    //   </KeypadLine>
    //   <KeypadLine>
    //     <Number>7</Number>
    //     <Number>8</Number>
    //     <Number>9</Number>
    //   </KeypadLine>
    //   <KeypadLine>
    //     <Number>00</Number>
    //     <Number>0</Number>
    //     <Number>지우기</Number>
    //   </KeypadLine>
    // </KeypadBox>
  );
};

// const KeypadBox = styled.div`
//   height: 208px;
// `;

// const KeypadLine = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 32px;
// `;

// const Number = styled.div`
//   width: 100px;
//   text-align: center;
//   color: ${({ theme }) => theme.colors.colorDarkGray1};
//   font-size: 24px;
//   font-weight: 400;
// `;

export default Keypad;
