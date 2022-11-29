import { useState } from "react";
import styled from "styled-components";

import iconExpand from "../assets/images/expand.svg";
import iconTurn from "../assets/images/turn.svg";

export default function Flashcard({ text, card }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handlerExpanderClick() {
    console.log("teste");
    console.log(isExpanded);
    if (isExpanded === false) {
      setIsExpanded(true);
    }
  }

  return (
    <StyledFlashcard onClick={handlerExpanderClick} isExpanded={isExpanded}>
      <span>{isExpanded ? card.question : text}</span>
      <img src={isExpanded ? iconTurn : iconExpand} alt="Expand flashcard" />
    </StyledFlashcard>
  );
}

const StyledFlashcard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.isExpanded ? "initial" : "center")};

  width: 100%;
  height: ${(props) => (props.isExpanded ? "130px" : "65px")};
  margin: 0 0 25px;
  padding: 15px 15px 10px;

  background: ${(props) => (props.isExpanded ? "#FFFFD5" : "#ffffff")};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  cursor: pointer;

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
    `};
  }
`;
