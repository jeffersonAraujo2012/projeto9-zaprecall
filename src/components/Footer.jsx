import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <span>0/4 CONCLUÍDOS</span>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;

  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);

  & span {
    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #333333;
  }
`;
