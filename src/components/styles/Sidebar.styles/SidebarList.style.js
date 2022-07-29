import styled from "styled-components";

export const StyledSidebarList = styled.div`
  display: flex;
  gap: 4%;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  padding: 5% 5%;
  width: 100%;

  &:hover {
    background-color: #383838;
  }

  &:active {
    background-color: #5c5b5b;
  }
  &:focus-within {
    background-color: #5c5b5b;
  }
`;

export const Icon = styled.div`
  padding-left: 18%;
`;

export const Text = styled.div`
  font-size: 1.3rem;
  padding-left: 8%;
  font-weight: 100;
`;
