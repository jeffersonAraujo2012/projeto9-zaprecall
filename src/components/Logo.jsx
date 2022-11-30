import styled from "styled-components";
import logo from "../assets/images/logo.svg";

export default function Logo() {
  return (
    <StyledLogo>
      <img src={logo} alt="Logotipo" />
      <span>ZapRecall</span>
    </StyledLogo>
  );
}

const StyledLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;

  & img {
    width: 52px;
    height: 60px;
  }
  & span {
    font-family: "Righteous";
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;

    display: flex;
    align-items: center;
    text-align: center;
    margin-left: 24px;

    color: #ffffff;
  }
`;
