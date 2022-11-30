import styled from "styled-components";
import OptionButton from "./OptionButton";

export default function Options({
  setStatusQuestion,
  setIsTurned,
  setIsExpanded,
}) {
  return (
    <StyledOptions>
      <OptionButton
        color="#FF3030"
        text="Não lembrei"
        onClick={() => {
          setStatusQuestion("WRONG");
          setIsTurned(false);
          setIsExpanded(false);
        }}
      />
      <OptionButton
        color="#FF922E"
        text="Quase não lembrei"
        onClick={() => {
          setStatusQuestion("ALMOST");
          setIsTurned(false);
          setIsExpanded(false);
        }}
      />
      <OptionButton
        color="#2FBE34"
        text="Lembrei"
        onClick={() => {
          setStatusQuestion("RIGHT");
          setIsTurned(false);
          setIsExpanded(false);
        }}
      />
    </StyledOptions>
  );
}

const StyledOptions = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-between;

  width: 100%;
`;
