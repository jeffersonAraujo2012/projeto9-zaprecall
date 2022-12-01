import styled from "styled-components";
import OptionButton from "./OptionButton";

export default function Options({
  setStatusQuestion,
  setIsTurned,
  setIsExpanded,
  setNumQuestionsAnswered,
  numQuestionsAnswered,
  addStatusAnsweredQuestions,
}) {
  function optionButtonClick(status) {
    setStatusQuestion(status);
    addStatusAnsweredQuestions(status);
    setIsTurned(false);
    setIsExpanded(false);
    setNumQuestionsAnswered(numQuestionsAnswered + 1);
  }

  return (
    <StyledOptions>
      <OptionButton
        color="#FF3030"
        text="Não lembrei"
        onClick={() => {
          optionButtonClick("WRONG");
        }}
      />
      <OptionButton
        color="#FF922E"
        text="Quase não lembrei"
        onClick={() => {
          optionButtonClick("ALMOST");
        }}
      />
      <OptionButton
        color="#2FBE34"
        text="Lembrei"
        onClick={() => {
          optionButtonClick("RIGHT");
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
