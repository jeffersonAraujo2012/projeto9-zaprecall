import { useState } from "react";
import styled from "styled-components";

import iconExpand from "../../assets/images/expand.svg";
import iconTurn from "../../assets/images/turn.svg";
import iconWrong from "../../assets/images/icon_wrong.png";
import iconAlmost from "../../assets/images/icon_almost.png";
import iconRight from "../../assets/images/icon_right.png";
import Options from "./Options";

export default function Flashcard({
  text,
  card,
  numQuestionsAnswered,
  setNumQuestionsAnswered,
  addStatusAnsweredQuestions,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTurned, setIsTurned] = useState(false);
  const [statusQuestion, setStatusQuestion] = useState("NOT_ANSWERED");

  console.log(statusQuestion);

  function handlerExpanderClick() {
    if (isExpanded === false && statusQuestion === "NOT_ANSWERED") {
      setIsExpanded(true);
    }
  }

  function handlerTurnClick() {
    if (isExpanded === true && isTurned === false) {
      setIsTurned(true);
    }
  }

  function icon() {
    switch (statusQuestion) {
      case "WRONG":
        return iconWrong;
      case "ALMOST":
        return iconAlmost;
      case "RIGHT":
        return iconRight;
    }

    if (isExpanded) return iconTurn;
    else return iconExpand;
  }

  return (
    <StyledFlashcard
      onClick={handlerExpanderClick}
      isExpanded={isExpanded}
      isTurned={isTurned}
      statusQuestion={statusQuestion}
    >
      <span>
        {isExpanded ? (isTurned ? card.answer : card.question) : text}
      </span>
      <img src={icon()} alt="Expand flashcard" onClick={handlerTurnClick} />
      {isTurned ? (
        <Options
          setStatusQuestion={setStatusQuestion}
          setIsExpanded={setIsExpanded}
          setIsTurned={setIsTurned}
          numQuestionsAnswered={numQuestionsAnswered}
          setNumQuestionsAnswered={setNumQuestionsAnswered}
          addStatusAnsweredQuestions={addStatusAnsweredQuestions}
        />
      ) : (
        ""
      )}
    </StyledFlashcard>
  );
}

const StyledFlashcard = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isTurned ? "column" : "row")};
  justify-content: space-between;
  align-items: ${(props) => (props.isExpanded ? "initial" : "center")};

  width: 100%;
  height: ${(props) => (props.isExpanded ? "130px" : "65px")};
  margin: 0 0 25px;
  padding: 15px 15px 10px;

  background: ${(props) => (props.isExpanded ? "#FFFFD5" : "#ffffff")};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  backface-visibility: hidden;
  transition: 400ms;

  cursor: ${(props) => (props.isExpanded ? "initial" : "pointer")};
  transform: ${(props) => (props.isTurned ? "rotateY(360deg)" : "rotateY(0)")};

  & span {
    font-family: "Recursive", cursive;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    ${(props) => {
      switch (props.statusQuestion) {
        case "WRONG":
          return `
            color: #FF3030;
            text-decoration: line-through;a
          `;
        case "ALMOST":
          return `
            color: #FF922E;
            text-decoration: line-through;
          `;
        case "RIGHT":
          return `
            color: #2FBE34;
            text-decoration: line-through;
          `;
        default:
          return `color: #333333`;
      }
    }};

    ${(props) =>
      props.isExpanded &&
      `
      font-weight: 400;
      font-size: 18px;
      line-height: 22px;
    `};
  }

  & img {
    width: 20px;
    height: 23px;

    ${(props) =>
      props.isExpanded &&
      `
      align-self: flex-end;
      width: 30px;
      height: 20px;
      cursor: pointer;
    `};

    display: ${(props) => (props.isTurned ? "none" : "block")};
  }
`;
