import styled from "styled-components";

export default function Body({ children }) {
  return (
    <StyledBody>
      {children}
    </StyledBody>
  );
}

const StyledBody = styled.main`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 42px 37px 170px;
  width: 100vw;
  min-height: 100vh;

  background: #fb6b6b;
`;
