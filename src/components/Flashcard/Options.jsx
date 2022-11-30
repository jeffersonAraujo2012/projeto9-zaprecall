import styled from "styled-components";
import OptionButton from "./OptionButton";

export default function Options() {
  return (
    <StyledOptions>
      <OptionButton color="#FF3030" text="Não lembrei" />
      <OptionButton color="#FF922E" text="Quase não lembrei" />
      <OptionButton color="#2FBE34" text="Lembrei" />
    </StyledOptions>
  );
}

const StyledOptions = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-between;

  width: 100%;
`;
