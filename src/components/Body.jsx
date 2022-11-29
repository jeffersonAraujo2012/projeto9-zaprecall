import styled from "styled-components";

export default function Body({ children }) {
  return (
    <StyledBody>
      {children}
    </StyledBody>
  );
}

const StyledBody = styled.main`
  box-sizing: border-box;

  position: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 37px 170px;
  width: 100vw;
  height: 100%;

  background: #fb6b6b;
  border: 1px solid #dbdbdb;
`;
