import { useState } from "react";
import styled from "styled-components";

import iconExpand from "../../assets/images/expand.svg";
import iconTurn from "../../assets/images/turn.svg";
import Options from "./Options";

export default function Flashcard({ text, card }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTurned, setIsTurned] = useState(false);

  function handlerExpanderClick() {
    console.log("teste");
    console.log(isExpanded);
    if (isExpanded === false) {
      setIsExpanded(true);
    }
  }

  function handlerTurnClick() {
    console.log(isTurned);
    if (isExpanded === true && isTurned === false) {
      setIsTurned(true);
    }
  }

  return (
    <StyledFlashcard
      onClick={handlerExpanderClick}
      isExpanded={isExpanded}
      isTurned={isTurned}
    >
      <span>{isExpanded ? (isTurned ? card.answer : card.question) : text}</span>
      <img
        src={isExpanded ? iconTurn : iconExpand}
        alt="Expand flashcard"
        onClick={handlerTurnClick}
      />
      {isTurned ? <Options /> : ""}
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

    color: #333333;

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
