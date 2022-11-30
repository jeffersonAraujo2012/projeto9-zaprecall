import styled from "styled-components";

export default function OptionButton({ text, color, onClick }) {
  return (
    <StyledOptionButton color={color} onClick={onClick}>
      {text}
    </StyledOptionButton>
  );
}

const StyledOptionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 33%;
  height: 37.17px;
  margin-right: 8px;

  background: ${(props) => props.color};
  border-radius: 5px;
  border: 0;

  font-family: "Recursive";
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  color: #ffffff;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }
`;
