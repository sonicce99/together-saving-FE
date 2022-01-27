import styled from "styled-components";

const Button = styled.button`
  width: 343px;
  height: 48px;
  color: ${({ theme }) => theme.colors.colorWhite};
  font-size: ${({ theme }) => theme.fontSize.fontSmall};
  font-weight: ${({ theme }) => theme.fontWeights.weightNormal};
  background-color: ${({ theme }) => theme.colors.colorBlue1};
  border-radius: 6px;
  margin-bottom: 34px;

  ${(props) => props.isNull && props.disabled && `background-color: #CDCDCD`}
`;

export default Button;
