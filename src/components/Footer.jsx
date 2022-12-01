import styled from "styled-components";

import iconWrong from "../assets/images/icon_wrong.png";
import iconAlmost from "../assets/images/icon_almost.png";
import iconRight from "../assets/images/icon_right.png";

export default function Footer({
  numQuestions,
  numQuestionsAnswered,
  statusAnsweredQuestions,
}) {
  return (
    <StyledFooter data-test="footer">
      <span>
        {numQuestionsAnswered}/{numQuestions} CONCLUÍDOS
      </span>
      <div>
        {statusAnsweredQuestions.map((status, index) => {
          switch (status) {
            case "WRONG":
              return (
                <img
                  src={iconWrong}
                  alt="Não lembrei"
                  data-test="no-icon"
                  key={index}
                />
              );
            case "ALMOST":
              return (
                <img
                  src={iconAlmost}
                  alt="Quase não lembrei"
                  data-test="partial-icon"
                  key={index}
                />
              );
            case "RIGHT":
              return (
                <img
                  src={iconRight}
                  alt="lembrei"
                  data-test="zap-icon"
                  key={index}
                />
              );
            default:
              return "";
          }
        })}
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;

  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

  span {
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #333333;
  }

  div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 6px;

    img {
      margin: 0 3px;
    }
  }
`;
