import { useState } from "react";
import styled from "styled-components";

import iconExpand from "../assets/images/expand.svg";

export default function Flashcard({ text, card }) {
  const [isExpanded, setIsExpanded] = useState(false);

  function handlerExpanderClick() {
    if (isExpanded === false) {
      setIsExpanded(true);
    }
  }

  return (
    <StyledFlashcard onClick={handlerExpanderClick}>
      <span>{text}</span>
      <img src={iconExpand} alt="Expand flashcard" />
    </StyledFlashcard>
  );
}

const StyledFlashcard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 65px;
  margin: 0 0 25px;
  padding: 15px;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  & span {
    font-family: "Recursive", cursive;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #333333;
  }

  & img {
    width: 20px;
    height: 23px;
  }
`;
