import styled from "styled-components";

import logo from "../assets/images/logo.svg";

export default function InitialScreen({ setShowInitialScreen }) {
  return (
    <StyledInitialScreen>
      <img src={logo} alt="logo" />
      <p>ZapRecall</p>
      <button onClick={() => setShowInitialScreen(false)}>
        Iniciar Recall!
      </button>
    </StyledInitialScreen>
  );
}

const StyledInitialScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: #fb6b6b;

  img {
    width: 136px;
    height: 161px;
  }

  p {
    margin-top: 12px;
    margin-bottom: 30px;

    font-family: "Righteous";
    font-weight: 400;
    font-size: 36px;
    line-height: 60px;
    text-align: center;

    color: #ffffff;
  }

  button {
    width: 246px;
    height: 54px;

    background: #ffffff;
    border: 1px solid #d70900;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;

    font-family: "Recursive";
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #d70900;
    cursor: pointer;
  }
`;
