import styled from "styled-components";

import party from "../assets/images/party.png";
import sad from "../assets/images/sad.png";

export default function FinalText({ statusAnsweredQuestions }) {
  const thereIsWrong = statusAnsweredQuestions.includes("WRONG");
  return (
    <StyledFinalText>
      <h1>
        <img
          src={thereIsWrong ? sad : party}
          alt={thereIsWrong ? "Que pena." : "Boa!"}
        />
        {thereIsWrong ? "Putz..." : "Parabéns!"}
      </h1>
      <p>
        {thereIsWrong
          ? `Ainda faltam alguns...\nMas não desanime!`
          : "Você não esqueceu de nenhum flashcard!"}
      </p>
    </StyledFinalText>
  );
}

const StyledFinalText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 18px;
  line-height: 22px;
  font-family: "Recursive";
  color: #333333;

  h1 {
    font-weight: 700;
    margin-bottom: 14px;
    img {
      margin-right: 12px;
    }
  }

  p {
    width: 222px;
    height: 44px;
    margin-bottom: 14px;

    font-weight: 400;
    text-align: center;
  }
`;
